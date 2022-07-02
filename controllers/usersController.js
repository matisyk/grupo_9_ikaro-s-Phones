const bcryptjs = require('bcryptjs')
const ModelUsers = require('../models/Users');

const { validationResult } = require('express-validator');
// const { text } = require('express');

const usersController ={
    register:(req, res) => {
        res.render('register')
    },
    saveUser: (req, res) =>{
        const valiResult = validationResult(req);
        if(valiResult.errors.length > 0){
            return res.render('register', {
                errors: valiResult.mapped(), //mapped convierte en un obj lit 
                oldData: req.body
            });
        }

        let userInDB = ModelUsers.findField('email', req.body.email)
        if(userInDB){
            return res.render('register', {
                errors:{
                    email:{
                        msg: 'Este email ya se ecuentra registrado'
                    }
                },
                oldData: req.body
            });
        }
        
        let avatar 
        if(req.files[0] != undefined){
            avatar = req.files[0].filename
        }
        else{
            avatar = "default-image.png" 
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: avatar
       }      

        ModelUsers.create(userToCreate)

        res.redirect("/products",);
    },
    login: (req, res) => {
        res.render('login');
    },
    logged: (req, res) => {
        let userToLogin = ModelUsers.findField('email', req.body.email)

        if(userToLogin){
            let confirm = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if(confirm){
                delete userToLogin.password
                req.session.userLogged = userToLogin
                res.redirect("/index",);
            }
        }
        res.render ('login', {
            errors: {
                email:{
                    msg: 'Este Email no se encuentra registrado'
                }
            }
        })
    }
}

module.exports= usersController;
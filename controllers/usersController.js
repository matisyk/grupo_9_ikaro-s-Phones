const bcryp = require('bcryptjs')
const fs = require('fs');
const path = require("path");

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const { validationResult } = require('express-validator');
const { text } = require('express');

const usersController ={
    register:(req, res) => {
        res.render('register');
    },
    saveUser: (req, res) =>{
        //validaciones middleware
        const valiResult = validationResult(req);

        if(valiResult.errors.length > 0){
            return res.render('register', {
                errors: valiResult.mapped(), //mapped convierte en un obj lit 
                oldData: req.body
            });
        }

        //guardar usuario
        let avatar 
        if(req.files[0] != undefined){
            avatar = req.files[0].filename
        }
        else{
            avatar = "default-image.png" 
        }
        
        let newUser = {
            id:users[users.length - 1].id + 1,
            ...req.body,
            password: bcryp.hashSync(req.body.password, 10),
            avatar:avatar,
        }
        users.push(newUser)
        fs.writeFileSync(usersFilePath, JSON.stringify(users));
    
        res.redirect("/products");
    },
    login: (req, res) => {
        res.render('login');
    },
    // logged: (req, res) => {

    //     }
}

module.exports= usersController;
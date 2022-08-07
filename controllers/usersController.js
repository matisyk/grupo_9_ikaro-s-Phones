const db = require('../database/models/index')

const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator');
// const ModelUsers = require('../models/Users');

module.exports = {

    register: (req, res) => {
        res.render('register')
    },

    saveUser: (req, res) => {

        //todos los usuarios
        db.Users.findAll()
        .then(users => {
            console.log(users)
        })

        //validaciones
        let valiResult = validationResult(req);

        if(valiResult.errors.length > 0){
            return res.render('register', {
                errors: valiResult.mapped(), //mapped convierte en un obj lit 
                oldData: req.body
            });
        }

        //si el email del usuario existe
        db.Users.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if(user){
                return res.render('register', {
                    errors:{
                        email:{
                            msg: 'Este email ya se ecuentra registrado'
                        }
                    },
                    oldData: req.body
                });
            }
        });

        let avatar; 
        if(req.files[0] != undefined){
            avatar = req.files[0].filename
        }else{
            avatar = "default-image.png" 
        }

        //encryptar contraseña
        db.Users.create({
            fullName: req.body.fullName,
            email: req.body.email,
            password: req.body.password,
            avatar: req.body.avatar
        },
        {
            where: {
                password: bcryptjs.hashSync(req.body.password, 10),
                avatar: avatar
            }
        })
        .then(function(){
            res.redirect('/products')
        })
    },
    login: (req, res) => {
        res.render('login');
    },
    logged: (req, res) => {

    },
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
}



// const usersController ={
//     register:(req, res) => {
//         res.render('register')
//     },


//     saveUser: (req, res) =>{
//         const valiResult = validationResult(req);

//         if(valiResult.errors.length > 0){
//             return res.render('register', {
//                 errors: valiResult.mapped(), //mapped convierte en un obj lit 
//                 oldData: req.body
//             });
//         }

//         let userInDB = ModelUsers.findField('email', req.body.email);

//         if(userInDB){
//             return res.render('register', {
//                 errors:{
//                     email:{
//                         msg: 'Este email ya se ecuentra registrado'
//                     }
//                 },
//                 oldData: req.body
//             });
//         }
        
//         let avatar 
//         if(req.files[0] != undefined){
//             avatar = req.files[0].filename
//         }
//         else{
//             avatar = "default-image.png" 
//         }

//         let userToCreate = {
//             ...req.body,
//             password: bcryptjs.hashSync(req.body.password, 10),
//             avatar: avatar
//        }      

//         ModelUsers.create(userToCreate)

//         return res.redirect("/products",);
//     },
//     login: (req, res) => {
//         res.render('login');
//     },
//     logged: (req, res) => {
//         let valiResult = validationResult(req);
//         let userToLogin = ModelUsers.findField('email', req.body.email)

//         if(!valiResult.errors.length > 0){

//             if(userToLogin){
//                 let password = bcryptjs.compareSync(req.body.password, userToLogin.password)
//                 if(password){
//                     userData = userToLogin
//                     delete userToLogin.password;
//                     req.session.userLogged = userData

//                     if(req.body.remenber){
//                         res.cookie('userEmail', req.body.email, {maxAge: (1000 * 1000)*90})
//                     }

//                     return res.redirect('/products');
//                 }

//                 return res.render ('login',{
//                     errors: {
//                         email:{
//                             msg: 'los datos ingresados son incorrectos'
//                         }
//                     }
//                 });
//             } else {
//                 return res.render('login', {
//                     errors: {
//                         email: {
//                             msg: 'Este correo no se encuentra registrado'
//                         }
//                     }
//                 })
//             }
//         } else{
//             return res.render ('login',{
//                 errors: valiResult.mapped(),
//             })
//         }
//     },
//     logout: (req, res) => {
// 	 	res.clearCookie('userEmail');
// 		req.session.destroy();
// 	 	return res.redirect('/');
// 	}
// }
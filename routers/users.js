const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController")
// const registerValidate = require('../middlewares/validateRegister')//validaciones form register
// const fileUpload = require('../middlewares/multerUsers')
// const loginValidate = require('../middlewares/validateLogin')//validaciones form login

//formulario de registro
router.get('/register', usersController.register)
// router.post('/register',fileUpload.any(), registerValidate, usersController.saveUser)

//formulario de login
router.get('/login',usersController.login)
// router.post('/login', loginValidate, usersController.logged)

//cerrar sesion
router.get('/logout', usersController.logout)

module.exports = router
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController")
const registerValidate = require('../middlewares/validateUsers')//validaciones
const loginValidate = require('../middlewares/validateLogin')
const fileUpload = require('../middlewares/multerUsers')


//formulario de registro
router.get('/register', usersController.register)
router.post('/register', fileUpload.any(), registerValidate, usersController.saveUser)

//formulario de login
router.get('/login', usersController.login)
// router.post('/login', loginValidate, usersController.logged)

module.exports = router
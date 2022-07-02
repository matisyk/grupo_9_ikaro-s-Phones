const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController")

const registerValidate = require('../middlewares/validateRegister')//validaciones form register
const fileUpload = require('../middlewares/multerUsers')

const loginValidate = require('../middlewares/validateLogin')//validaciones form login
const guestMiddleware = require('../middlewares/guest')


//formulario de registro
router.get('/register', guestMiddleware, usersController.register)
router.post('/register',fileUpload.any(), registerValidate, usersController.saveUser)

//formulario de login
router.get('/login', guestMiddleware, usersController.login)
router.post('/login', loginValidate, usersController.logged)


module.exports = router
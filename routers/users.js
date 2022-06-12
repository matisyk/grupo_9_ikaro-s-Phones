const express = require("express");
const path = require('path');
const router = express.Router();
const registerValidate = require('../middlewares/registerMiddleware')

const usersController = require("../controllers/usersController")

//formulario de registro
router.get('/register', usersController.register)
router.post('/register', registerValidate, usersController.saveUser)

//formulario de login
router.get('/login', usersController.login)

module.exports = router
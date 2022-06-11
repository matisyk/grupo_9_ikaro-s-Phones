const express = require("express");
const path = require('path');
const router = express.Router();
const { body } = require('express-validator')

const usersController = require("../controllers/usersController")

const validate = [
    body('fullName').notEmpty().withMessage('Debes completar este campo'),
    body('email').notEmpty().withMessage('Debes completar este campo').bail()
    .isEmail().withMessage('Debes escribir una dirección de correo válido'),
    body('password').notEmpty().withMessage('Debes completar este campo'),
    body('confirm').notEmpty().withMessage('Debes completar este campo'),
]

//formulario de registro
router.get('/register', usersController.register)
router.post('/register',  validate, usersController.saveUser)

//formulario de login
router.get('/login', usersController.login)

module.exports = router
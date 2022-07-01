const { body } = require('express-validator')

const userValidate = [
    body('fullName').notEmpty().withMessage('Debe completar este campo'),
    body('email').notEmpty().withMessage('Debe completar este campo').bail()
    .isEmail().withMessage('Debe ingresar una dirección de correo válido'),
    body('password').notEmpty().withMessage('Debe completar este campo').bail()
    .isLength({min:6, max:10}).withMessage('La contraseña debe tener entre 6-10 caracteres'),
]

module.exports = userValidate;
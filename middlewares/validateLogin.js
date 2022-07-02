const { body } = require('express-validator');

const validateLogin = [
    body('email').isEmail().withMessage('Ingrese una direccón de correo valida'), 
    body('password').isLength({ min: 6}).withMessage('La contraseña debe tener como mínimo 6 caracteres')
]

module.exports = validateLogin;
const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const usersController = require("../controllers/usersController")

const registerValidate = require('../middlewares/registerMiddleware')

//configuracion multer 
let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        let folder = path.join(__dirname, '../public/images/users')
        callback(null, folder);
    },
    filename: (req, file, callback) => {
        let imgName = Date.now() + path.extname(file.originalname);
        callback(null, imgName);
    }
})
// guardamos en una variable la confg
let fileUpload = multer({storage:storage});


//formulario de registro
router.get('/register', usersController.register)
router.post('/register', fileUpload.any(), registerValidate, usersController.saveUser)

//formulario de login
router.get('/login', usersController.login)

module.exports = router
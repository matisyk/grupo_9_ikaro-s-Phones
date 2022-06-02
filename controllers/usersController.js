const path = require("path");

const usersController ={
    register:(req, res) => {
        res.render('register');
    },
    saveUser: (req, res) =>{
        res.redirect('register')
    },
    login: (req, res) => {
        res.render('login');
    },
}

module.exports= usersController;
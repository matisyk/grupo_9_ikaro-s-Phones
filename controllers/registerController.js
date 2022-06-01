const path = require("path");

const registerController ={
    register:(req, res) => {
        res.render('register');
    },
    saveUser: (req, res) =>{
        res.redirect('register')
    }
}

module.exports= registerController;
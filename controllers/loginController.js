const path = require("path")

const loginController ={
    login: (req, res) => {
        res.render('users/login.ejs');
    },
}

module.exports= loginController;
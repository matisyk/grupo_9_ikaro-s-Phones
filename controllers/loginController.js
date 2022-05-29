const path = require("path")

const loginController ={
    login: (req, res) => {
        res.render('login.ejs');
    },
}

module.exports= loginController;
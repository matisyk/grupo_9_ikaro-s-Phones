// const fs = require('fs');
// const path = require("path");
const { validationResult } = require('express-validator')

// const usersFilePath = path.join(__dirname, '../data/users.json');
// const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController ={
    register:(req, res) => {
        res.render('register');
    },
    saveUser: (req, res) =>{
        const valiResult = validationResult(req);

        if(valiResult.errors.length > 0){
            return res.render('register', {
                errors: valiResult.mapped(), //mapped convierte en un obj lit 
                oldData: req.body
            });
        }

        res.redirect("/products");
    },
    login: (req, res) => {
        res.render('login');
    },
}

module.exports= usersController;
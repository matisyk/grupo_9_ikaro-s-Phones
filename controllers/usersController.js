const fs = require('fs');
const path = require("path");

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController ={
    register:(req, res) => {
        res.render('register');
    },
    saveUser: (req, res) =>{
        let user = {
            firstName: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            confirm: req.body.confirm
        }

        let usuarios;
        if(users == "") {
            usuarios = [];
        }
    
        usuarios.push(user);

        let usuariosJSON = JSON.stringify(usuarios)

        fs.writeFileSync(usersFilePath, usuariosJSON);
	    
        res.redirect('/index',)
    },
    login: (req, res) => {
        res.render('login');
    },
}

module.exports= usersController;
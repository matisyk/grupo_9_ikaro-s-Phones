const fs = require('fs');
const path = require("path");

const users = JSON.parse(fs.readFileSync(user, 'utf-8'));
const usersFilePath = path.join(__dirname, '../data/users.json');

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

        let archUsers = fs.readFileSync('users.json', {encoding:'utf-8'})
        let users;
        if(archUsers == "") {
            users = [];
        }else{
            users = JSON.parse(archUsers);
        }
        
        usersJSON = JSON.stringify(users)

        users.push(user)

        fs.writeFileSync(usersFilePath, JSON.stringify(users))
	    
        res.redirect('/index',)
    },
    login: (req, res) => {
        res.render('login');
    },
}

module.exports= usersController;
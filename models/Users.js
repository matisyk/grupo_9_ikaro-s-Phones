// const fs = require('fs');
// const path = require ('path');

// const Users = {
	
    // usersFilePath: path.join(__dirname, '../data/usersDataBase.json'),

 	// users: function () {
 	// 	return JSON.parse(fs.readFileSync(this.usersFilePath, 'utf-8'));
 	// },

	// generateId: function () { //generar id para los nuevos usuarios
	// 	let allUsers = this.findAll();
    //     let lastUser = allUsers.pop();
	// 	if (lastUser) {
 	// 		return lastUser.id + 1;
 	// 	}
 	// 	return 1;
 	// },

 	// findAll: function () {
 	// 	return this.users();
 	// },

 	// findId: function (id) { //Buscar usuario por id
 	// 	let allUsers = this.findAll();
 	// 	let userFound = allUsers.find(user => user.id === id);
 	// 	return userFound;
 	// },

 	// findField: function (field, text) {
 	// 	let allUsers = this.findAll();
	// 	let userFound = allUsers.find(user => user[field] === text);
    //     return userFound;
 	// },

	// create: function (userData){   
 	// 	let allUsers = this.findAll();
 	// 	let newUser = {
 	// 		id: this.generateId(), 
 	// 		...userData,
 	// 	}
 	// 	allUsers.push(newUser);
    //     fs.writeFileSync(this.usersFilePath, JSON.stringify(allUsers, null,  ' '));
 	// 	return newUser;
	// },
    // delete: function (id) {
    //  	let allUsers = this.findAll();
 	//  	let finalUsers = allUsers.filter(user => user.id !== id);
 	//  	fs.writeFileSync(this.usersFilePath, JSON.stringify(finalUsers, null, ' '));
 	//  	return true;
    // }
//}

//module.exports = Users;

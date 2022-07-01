// const locals = (req, res, next) => {

//     res.locals.isAuthenticated = false;
    
//     if(req.session && req.session.userLogged && req.session.userLogged.admin){
//         next()
//     }
//     res.send('No tienes permisos para esta URL')
// }

// module.exports = locals
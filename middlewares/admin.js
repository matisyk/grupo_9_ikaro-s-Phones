const locals = (req, res, next) => {
    if (req.session && req.session.userLogged && req.session.userLogged.admin) {
        next()  
    }       
        res.redirect("/index")    
    }
    
module.exports = locals
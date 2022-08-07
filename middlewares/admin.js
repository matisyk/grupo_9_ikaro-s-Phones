const locals = (req, res, next) => {
    if (req.session && req.session.userLogged && req.session.userLogged.true) {
        next()  
    }       
        res.redirect("/index")    
    }
    
module.exports = locals
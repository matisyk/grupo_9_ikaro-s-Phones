const path = require("path");

const indexController={
    index : (req, res) => {
        res.render('products/index');
    },
}
module.exports = indexController;
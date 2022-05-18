const path = require("path");

const edicionController={
    edicion : (req, res) => {
        res.render('products/creacionYEdicion');
    },
}
module.exports = edicionController;
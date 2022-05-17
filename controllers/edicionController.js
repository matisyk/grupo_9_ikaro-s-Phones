const path = require("path");

const edicionController={
    edicion : (req, res) => {
        res.render('creacionYEdicion');
    },
}
module.exports = edicionController;
const path = require("path");

const edicionController={
    //Edicion de producto
	edicion: (req, res) => {
		let id = req.params.id;
		let product = products.find(product => product.id == id)
        res.render("edicion", {product})
	},
}
module.exports = edicionController;
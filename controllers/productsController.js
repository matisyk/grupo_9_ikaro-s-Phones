const fs = require('fs');
const path = require('path');

const smartphonesFilePath = path.join(__dirname, '../data/productsDataBase.json');
const smartphones = JSON.parse(fs.readFileSync(smartphonesFilePath, 'utf-8'));

const productController ={
    productCart : (req, res) => {
        res.render('products/productCart');
    },
    productDetail : (req, res) => {
		let id = req.params.id;
		let smartphone = smartphones.find(product => product.id == id)

		res.render("products/productDetail", {smartphone})
	},
  
}

module.exports= productController;
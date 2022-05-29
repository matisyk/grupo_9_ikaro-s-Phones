const fs = require('fs');
const path = require('path');

const smartphonesFilePath = path.join(__dirname, '../data/productsDataBase.json');
const smartphones = JSON.parse(fs.readFileSync(smartphonesFilePath, 'utf-8'));

const productController ={
    productCart : (req, res) => {
        res.render('productCart');
    },
    productDetail : (req, res) => {
		let id = req.params.id;
		let smartphone = smartphones.find(product => product.id == id)

		res.render("productDetail", {smartphone})
	},
  
}

module.exports= productController;
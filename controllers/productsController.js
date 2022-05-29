const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController ={
    productCart : (req, res) => {
        res.render('productCart');
    },
    detail : (req, res) => {
        let id = req.params.id
		let product = products.find(product => product.id == id)

		res.render('productDetail',{product, products})
	},
  
}

module.exports= productController;
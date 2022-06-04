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

		res.render('productDetail',{product})
	},
    store: (req, res) => {
        res.render('products', {products})
    },
    // //ruta creacion de producto por post
    // create: (req, res) => {
    //     res.redirect('/index', {product})
    // },
    edit: (req, res) => {  //ruta get para editar el product
        res.render('productEdit', {products})
    },
    edited: (req, res) => {  //ruta put para guardar el product editado
		let id = req.params.id;
		let product = products.find(product => product.id == id)
        res.redirect('/index', {product})
	},
  
}

module.exports= productController;
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController ={
    store: (req, res) => {
        res.render('products', {products})
    },
    productCart : (req, res) => {
        res.render('productCart');
    },
    detail : (req, res) => {
        let id = req.params.id
		let product = products.find(product => product.id == id)

		res.render('productDetail',{product})
	},
    create: (req, res) => {  //ruta GET crear producto
        res.render('productCreate', {products})
    },
    created: (req, res, next) => {  //ruta POST guardar product
        let file = req.file;
        if(!file){
            const error = new Error ('Por favor seleccione un archivo')
            error.httpStatusCode = 400
            return next (error)
        }else{
            res.redirect('index', {product})
        }
    },
    edit: (req, res) => {  //ruta GET editar el product
        res.render('productEdit', {products})
    },
    edited: (req, res) => {  //ruta PUT guardar la edicion
		let id = req.params.id;
		let product = products.find(product => product.id == id)
        res.redirect('/index', {product})
	},
}

module.exports= productController;
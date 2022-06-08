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

        let image 
        if(req.files[0] != undefined){
            image = req.files[0].filename
        }
        else{
            image = "default-image.png" 
        }

        let newProduct = {
            id:products[products.length - 1].id + 1,
            ...req.body,
            image:image,
        }
        products.push(newProduct)
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
        res.redirect("./products")

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
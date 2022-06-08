const express = require("express");
const router = express.Router();
const path = require("path")
//requerir multer par subir archivos
const multer = require('multer');

//configuracion multer 
let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        let folder = path.join(__dirname, '../public/products')
        callback(null, folder);
    },
    filename: (req, file, callback) => {
        let imgName = Date.now() + path.extname(file.originalname);
        callback(null, imgName);
    }
})
// guardamos en una variable la confg
let fileUpload = multer({storage});

//require controller
const productsControllers = require("../controllers/productsController")

//todos los productos
router.get('/products', productsControllers.store)

//carrito
router.get('/productCart', productsControllers.productCart);

//detalle de product
router.get('/Detail/:id/', productsControllers.detail);

//Creacion de producto
router.get('/create', productsControllers.create);
router.post('/create', fileUpload.any() , productsControllers.created);

//edicion
router.get('/edit/:id', productsControllers.edit);
router.put('/edit/:id/', productsControllers.edited);


// //borrar
// router.delete('/delete/:id/', productsControllers.delete);

module.exports = router;
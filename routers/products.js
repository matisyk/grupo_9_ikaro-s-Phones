const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require("path")
const productsControllers = require("../controllers/productsController")



//configuracion multer 
let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        let folder = path.join(__dirname, '../public/images/products')
        callback(null, folder);
    },
    filename: (req, file, callback) => {
        let imgName = Date.now() + path.extname(file.originalname);
        callback(null, imgName);
    }
})
// guardamos en una variable la confg
let fileUpload = multer({storage:storage});

//todos los productos
router.get('/products', productsControllers.store)

//carrito
router.get('/productCart', productsControllers.productCart);

//detalle de product
router.get('/Detail/:id/', productsControllers.detail);

//Creacion de producto
router.get('/create', productsControllers.create);
router.post('/create', fileUpload.any() , productsControllers.created);

//borrar un producto
router.delete('/delete/:id/', productsControllers.delete);

//editar un producto
router.get('/edit/:id/', productsControllers.edit);
router.patch('/edit/:id/', fileUpload.any(), productsControllers.edited);



module.exports = router;
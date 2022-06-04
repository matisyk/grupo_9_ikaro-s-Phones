const express = require("express");
const router = express.Router();
//requerir multer par subir archivos
const multer = require('multer');

//configuracion multer 
let multerDiskStorage = multer.diskStorage({
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
let fileUpload = multer({storage : multerDiskStorage});

//require controller
const productsControllers = require("../controllers/productsController")

//carrito
router.get('/productCart', productsControllers.productCart);

//detalle de product
router.get('/Detail/:id/', productsControllers.detail);

//todos los productos
router.get('/products', productsControllers.store)

//Creacion de producto
// router.post('/create', fileUpload.single('image') 
//productsControllers.create);

//edicion
router.get('/edit/:id', productsControllers.edit);
router.put('/edit/:id/', productsControllers.edited);


// //borrar
// router.delete('/delete/:id/', productsControllers.delete);

module.exports = router;
const express = require("express");
const router = express.Router();
const productsControllers = require("../controllers/productsController")
const fileUpload = require('../middlewares/multerProducts')
// const admin = require('../middlewares/admin')

//todos los productos
router.get('/products', productsControllers.store)

//carrito
router.get('/productCart', productsControllers.productCart);

//detalle de product
router.get('/Detail/:id/', productsControllers.detail);

//Creacion de producto
router.get('/create',productsControllers.create);// admin
router.post('/create', fileUpload.any() , productsControllers.created);

//editar un producto
router.get('/edit/:id/', productsControllers.edit);// admin
router.patch('/edit/:id/', fileUpload.any(), productsControllers.edited);

//borrar un producto
router.delete('/delete/:id/', productsControllers.delete);// admin

module.exports = router;
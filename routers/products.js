const express = require("express");
const router = express.Router();

//require controller
const productsControllers = require("../controllers/productsController")

//carrito
router.get('/productCart', productsControllers.productCart);

//detalle de product
router.get('/Detail/:id', productsControllers.detail);

//todos los productos
router.get('/products', productsControllers.store)


module.exports = router;
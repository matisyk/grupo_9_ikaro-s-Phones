const express = require("express");
const router = express.Router();

//require controller
const productsControllers = require("../controllers/productsController")

//carrito
router.get('/productCart', productsControllers.productCart);

//detalle de product
router.get('/Detail/:id', productsControllers.detail);


module.exports = router;
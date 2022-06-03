const express = require("express");
const router = express.Router();

//require controller
const productsControllers = require("../controllers/productsController")

//carrito
router.get('/productCart', productsControllers.productCart);

//detalle de product
router.get('/Detail/:id/', productsControllers.detail);

//todos los productos
router.get('/products', productsControllers.store)

// //creacion de producto
// router.post('/create', productsControllers.create);

// //edicion
// router.put('/edit/:id/', productsControllers.edit);

// //borrar
// router.delete('/delete/:id/', productsControllers.delete);

module.exports = router;
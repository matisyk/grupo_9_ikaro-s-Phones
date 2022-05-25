const express = require("express");
const router = express.Router();
const productsControllers = require("../controllers/productsController")

router.get("/productCart", productsControllers.productCart );
router.get("/productDetail", productsControllers.productDetail );

module.exports = router;
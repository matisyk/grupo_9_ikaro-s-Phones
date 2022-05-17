const express = require("express");
const router = express.Router();
const productsControllers = require("../controllers/productsController")

router.get("/", productsControllers.productCart );
router.get("/", productsControllers.productDetail );

module.exports = router;
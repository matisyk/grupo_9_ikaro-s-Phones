const express = require("express");
const router = express.Router();
const productsControllers = require("../controllers/productsController")

router.get("/", productsControllers.products )

module.exports = router
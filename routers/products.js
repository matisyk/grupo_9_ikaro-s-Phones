const express = require("express");
const router = express.Router();
const productsControllers = require("../controllers/productsController")

router.get("/", controllers.products )

module.exports = router
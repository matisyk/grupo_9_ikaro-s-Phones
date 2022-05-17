const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController")

router.get("/", controllers.index)

module.exports = router
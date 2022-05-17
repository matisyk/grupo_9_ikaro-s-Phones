const express = require("express");
const router = express.Router();
const indexControllers = require("../controllers/indexController")

router.get("/", indexController.index)


module.exports = router
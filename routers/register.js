const express = require("express");
const router = express.Router();
const indexControllers = require("../controllers/registerController")

router.get("/", controllers.register)

module.exports = router
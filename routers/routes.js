const express = require("express");
const router = express.Router();
const indexControllers = require("../controllers/indexControllers")

router.get("/", indexControllers.index)
router.get("/login", indexControllers.login)
router.get("/register", indexControllers.register )
module.exports = router
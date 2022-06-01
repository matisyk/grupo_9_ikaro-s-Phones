const express = require("express");
const router = express.Router();
const indexControllers = require("../controllers/registerController")

router.get('/register', indexControllers.register)
router.post('/register', indexControllers.saveUser)

router.get("/login", loginControllers.login)

module.exports = router
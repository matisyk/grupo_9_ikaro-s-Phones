const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController")

router.get('/register', usersController.register)
router.post('/register', usersController.saveUser)
router.get("/login", usersController.login)

module.exports = router
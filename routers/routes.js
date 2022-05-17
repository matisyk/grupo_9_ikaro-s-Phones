const express = require("express");
const router = express.Router();
const indexControllers = require("../controllers/indexControllers");
const edicionControllers = require("../controllers/edicionController");

router.get("/", indexControllers.index);
router.get("/login", indexControllers.login);
router.get("/register", indexControllers.register);
router.get("/editar", edicionControllers.edicion);

module.exports = router;
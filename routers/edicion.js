const express = require("express");
const router = express.Router();
const edicionControllers = require("../controllers/edicionController");

router.get("/editar", edicionControllers.edicion);

module.exports = router;
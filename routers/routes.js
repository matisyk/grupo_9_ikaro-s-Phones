const express = require("express");
const router = express.Router();
const indexControllers = require("../controllers/indexControllers");
const edicionControllers = require("../controllers/edicionController");
const loginControllers = require("../controllers/loginController");
const productControllers = require("../controllers/productController");
const registerControllers = require("../controllers/registerController");


router.get("/", indexControllers.index);
router.get("/login", loginControllers.login);
router.get("/register", registerControllers.register);
router.get("/editar", edicionControllers.edicion);
router.get("/productCart", productControllers.productCart);
router.get("/productDetail", productControllers.productDetail);

module.exports = router;
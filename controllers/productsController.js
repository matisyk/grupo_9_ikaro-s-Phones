const path = require("path");

const productController ={
    productCart : (req, res) => {
        res.render('products/productCart');
    },
    productDetail : (req, res) => {
        res.render('products/productDetail');
    },
  
}

module.exports= productController;
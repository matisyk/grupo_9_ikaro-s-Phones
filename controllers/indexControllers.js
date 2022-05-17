const path = require("path")

const indexControllers ={
    index : (req, res) => {
        res.sendFile(path.resolve('./views/index.html'));
    },
    login: (req, res) => {
        res.sendFile(path.resolve('./views/login.html'));
    },
    register:(req, res) => {
        res.sendFile(path.resolve('./views/register.html'));
    },
    productCart : (req, res) => {
        res.sendFile(path.resolve('./views/productCart.html'));
    },
    productDetail : (req, res) => {
        res.sendFile(path.resolve('./views/productDetail.html'));
    }

}
module.exports = indexControllers
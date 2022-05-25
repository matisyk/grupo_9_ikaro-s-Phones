const path = require("path");
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const visitado = products.filter(product => product.category == "visitado")
const enOferta = products.filter(product => product.category == "en-oferta")

const indexController={
    index : (req, res) => {
        res.render('products/index', {visitado,enOferta});
    },
}
module.exports = indexController;
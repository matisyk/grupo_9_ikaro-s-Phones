const path = require("path");
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const smartphones = products.filter(product => product.category == "smartphone")
const enOferta = products.filter(product => product.category == "en-oferta")

const indexController={
    index : (req, res) => {
        res.render('products/index', {smartphones,enOferta});
    },
}
module.exports = indexController;
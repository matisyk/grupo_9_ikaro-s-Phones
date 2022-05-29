const path = require("path");
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const smartphones = products.filter(product => product.category == "smartphone")
const inSale = products.filter(product => product.category == "inSale")

const indexController={
    index : (req, res) => {
        res.render('products/index', {smartphones,inSale});
    },
}
module.exports = indexController;
const db = require('../database/models/index')

// const smartphones = products.filter(product => product.category == "smartphone")
// const inSale = products.filter(product => product.category == "in-sale")

module.exports = {

    index: (req, res) => {

        // let brands = db.Brands.findAll();
        // let phones = db.Phones.findAll();

        // Promise.All([brands, phones])

        db.Phones.findAll()
        .then(products => {
            res.render('index',{products})
        })
    },

    // inSale : (req, res) => {
    //     let product=products
    //         if(product.category == "inSale"){
    //             res.send(inSale)
    //         }
    //     },

}


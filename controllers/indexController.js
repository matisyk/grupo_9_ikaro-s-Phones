const db = require('../database/models/index')

// const smartphones = products.filter(phone => product.category == "smartphone")
// const inSale = products.filter(product => product.category == "in-sale")

module.exports = {

index: (req, res) => {

    let smartphone = db.Phones.findAll({
        where: {
            category: 'smartphone'
        }
    });
    
    let inSale = db.Phones.findAll({
        where: {
            category: 'inSale'
        }
    });

    // let brand = db.Brands.findAll();

    Promise.all([smartphone, inSale, ])
    .then(function([smartphone, inSale, ]) {
        res.render('index', {smartphone,inSale,})
    })

},

    // inSale : (req, res) => {
    //     let product=products
    //         if(product.category == "inSale"){
    //             res.send(inSale)
    //         }
//     //     },

}


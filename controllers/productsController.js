const db = require('../database/models/index')

module.exports = {

    store: (req, res) => {

        let brands = db.Brands.findAll();
        let phones = db.Phones.findAll();

        Promise.All([brands, phones])
        .then(function([brands, phones]) {
            res.render('products', {brands,phones})
        })

    },

    // detail: (req, res) => {

    //     db.Phones.findByPK(req.params.id)
    //     include: [
    //         {association:'brand'}, 
    //         {association:'system'},
    //         {association:'specification'}
    //     ]
    //     .then(products => {
    //         res.render('productDetail', {products})
    //     })

    // },

}

// const productController ={
//     // store: (req, res) => {
//     //     res.render('products', {products})
//     // },
//     productCart : (req, res) => {
//         res.render('productCart', {products});
//     },
//     detail : (req, res) => {
//         let id = req.params.id
// 		let product = products.find(product => product.id == id)

// 		res.render('productDetail',{product})
// 	},
//     create: (req, res) => {  //ruta GET crear producto
//         res.render('productCreate', {products})
//     },
//     created: (req, res) => {  //ruta POST guardar product
//         let image 
//         if(req.files[0] != undefined){
//             image = req.files[0].filename
//         }
//         else{
//             image = "default-image.png" 
//         }

//         let newProduct = {
//             id:products[products.length - 1].id + 1,
//             ...req.body,
//             image:image,
//         }
//         products.push(newProduct)
//         fs.writeFileSync(productsFilePath, JSON.stringify(products));
//         res.redirect("/products")
        
//     },
//     edit: (req, res) => {  //ruta GET editar el product
//         let id = req.params.id;
// 		let product = products.find(product => product.id == id)
//         res.render('productEdit', {product})
//     },
//     edited: (req, res) => {  //ruta PUT guardar la edicion
       
// 		let id = req.params.id;
// 		let productToEdit = products.find(product => product.id == id)

//         let image
//         if(req.files[0] != undefined){
//             image = req.files[0].filename
//         }else{
//             image = productToEdit.image
//         }

//         productToEdit = {
//             id: productToEdit.id,
//             ...req.body,
//             image: image,
//         }
      
//         let productEdited = products.map(product => {
//             if(product.id == productToEdit.id){
//                 return product = {...productToEdit};
//             }
//             return product
//         })

//         fs.writeFileSync(productsFilePath, JSON.stringify(productEdited))
//         res.redirect('/products')
// 	},
//     delete: (req, res) => {
// 		let id = req.params.id;
// 		let productToDeleted = products.filter(product => product.id != id)
	    
// 		fs.writeFileSync(productsFilePath,JSON.stringify(productToDeleted));
//         console.log('delete')
//         res.redirect("/products")
	
	
//     },
  
// }



// module.exports= productController;
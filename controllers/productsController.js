const db = require('../database/models/index')

module.exports = {

    store: (req, res) => {
    db.Phones
        .findAll({
            include:['brand']
        })
            .then(product => {
                res.render('products', {product})
            })
   },
      
   productCart: (req, res) => {
    res.render('productCart');
   },

   detail: (req, res) => {
    db.Phones
        .findByPk(req.params.id, {
            include: [
                'brand',
                'system',
                'specification'
            ]
        })
            .then(product => {
                res.render('productDetail', {product})
            })

   },

   create: (req, res) => {
    db.Phones
        .findAll({
            include: [
                'brand',
                'system',
                'specification'
            ]
        })
            .then(product => {
                res.render('productCreate', {product})
            })

   },

   created: (req, res) => {
    let image; 
        if(req.files[0] != undefined){
            image = req.files[0].filename
        }else{
            image = "default-image.png" 
        }
            db.Phones.create({
                ...req.body,
                image: image
            })
                .then(phone => {
                    res.redirect('/products')
                })

   },

   edit: (req, res) => {
    db.Phones
        .findByPk(req.params.id,{
            include:[
                'brand',
                'system',
                'specification'
            ]
        })
            .then(product => {
                res.render('productEdit', {product})
            })

   },

   edited: (req, res) => {
    let image
        if(req.files[0] != undefined){
            image = req.files[0].filename
        }
            else{
                image = productToEdit.image
            }
                db.Phones
                .update({
                    ...req.body,
                    image: image
                },{
                    where: {id: req.params.id}
                })
                .then(phone => {
                    res.redirect('/products')
                })

    },

   delete: (req, res) => {
    db.Phones
        .destroy({
            where: {
                id: req.params.id
            }
        })
            .then(phone => {
                res.redirect('/products')
            })

   },
 
}

// const productController ={
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
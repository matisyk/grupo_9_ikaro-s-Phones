
const db = require('../database/models/index')

 let phones = db.phones.findAll({
         include:['brand']
})
  .then(phone => {
    return phone
   });
 

   let input = document.querySelector('#searcher');
     const filtrar = () => {
         const texto = input.value.toLowerCase();
         for(let phone of phones){
             let product = phone.brand.toLowerCase();
             if(product.indexOf(texto) !== -1){

             }
         }
     }
     input.addEventListener("keyup" , filtrar)
     filtrar()
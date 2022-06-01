const express = require('express');
const app = express();
const path = require('path');

//routers
const rutaIndex = require('./routers/index');
const rutaLogin = require('./routers/login');
const rutaProducts = require('./routers/products');
const rutaRegister = require('./routers/register');
const rutaEdicion = require('./routers/edicion');


//uso de rutas
app.use('',rutaIndex);
app.use('',rutaLogin);
app.use('',rutaProducts);
app.use('',rutaProducts);
app.use('',rutaRegister);
app.use('', rutaEdicion);

//para capturar lo que llegue del form en un obj lit. 
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.set('view engine', 'ejs')//configuracion EJS
app.use(express.static(path.resolve ('public')));
app.use(express.static(path.resolve ('views')));




app.listen(3000,()=> console.log('servidor corriendo'));


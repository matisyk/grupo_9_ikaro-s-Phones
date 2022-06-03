const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
//routers
const rutaIndex = require('./routers/index');
const rutaProducts = require('./routers/products');
const rutaUsers = require('./routers/users');
const rutaEdicion = require('./routers/edicion');


//uso de rutas
app.use('',rutaIndex);
app.use('',rutaProducts);
app.use('',rutaUsers);
app.use('', rutaEdicion);

//para capturar lo que llegue del form en un obj lit. 
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.set('view engine', 'ejs')//configuracion EJS
app.use(express.static(path.resolve ('public')));
app.use(express.static(path.resolve ('views')));

app.use(methodOverride("_method"));

app.listen(3000,()=> console.log('servidor corriendo'));


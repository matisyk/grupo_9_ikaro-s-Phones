const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')


// usar en el arch de rutas donde necesitemos multer (subida de archivos)
// const multer = require('multer');

//routers
const rutaIndex = require('./routers/index');
const rutaProducts = require('./routers/products');
const rutaUsers = require('./routers/users');

//uso de rutas
app.use('',rutaIndex);
app.use('',rutaProducts);
app.use('',rutaUsers);


//para capturar lo que llegue del form en un obj lit. 
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.set('view engine', 'ejs')//configuracion EJS
app.use(express.static(path.resolve ('public')));
app.use(express.static(path.resolve ('views')));

app.use(methodOverride("_method"));

app.listen(3000,()=> console.log('servidor corriendo'));


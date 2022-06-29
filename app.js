
// require
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const methodOverride = require('method-override')

const app = express();


app.use(express.urlencoded({extended:false}));//Para capturar lo que llegue del form en un obj lit.
app.use(express.json());


app.use(cookieParser())
app.use(express.static(path.resolve ('public')));
app.use(methodOverride("_method"));
app.use(express.static(path.resolve ('views')));
app.use(session({secret:"ikaro's secret"}))

app.set('view engine', 'ejs')//configuracion EJS


//routers require and use
const rutaIndex = require('./routers/index');
const rutaProducts = require('./routers/products');
const rutaUsers = require('./routers/users');

app.use('/',rutaIndex);
app.use('/',rutaProducts);
app.use('/',rutaUsers);

app.listen(3000,()=> console.log('servidor corriendo'));

app.use((req, res, next)=>{
    res.status(404).render('404-page');
    next();
})
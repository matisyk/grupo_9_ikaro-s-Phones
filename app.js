const express = require('express');
const app = express();
const path = require('path');

//routers
const rutaIndex = require('./routers/index')
const rutaLogin = require('./routers/login')
const rutaProducts = require('./routers/Products')
const rutaRegister = require('./routers/register')

app.listen(3000, );
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.static('views'));

app.post('/', (req, res) => {
   res.sendFile(path.resolve('./views/index.html'));
});

//routers
app.use('/',rutaIndex);
app.use('/login',rutaLogin);
app.use('/products',rutaProducts);
app.use('/register',rutaRegister);



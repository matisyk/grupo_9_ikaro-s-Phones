const express = require('express');
const app = express();
const path = require('path');

//routers
const rutaIndex = require('./routers/index');
const rutaLogin = require('./routers/login');
const rutaProducts = require('./routers/products');
const rutaRegister = require('./routers/register');
const rutaEdicion = require('./routers/edicion');

app.listen(3000, );
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.static('views'));

app.post('/', (req, res) => {
   res.render(path.resolve('./views/products/index'));
});

// <<<<<<< HEAD
//routers
app.use('',rutaIndex);
app.use('',rutaLogin);
app.use('',rutaProducts);
app.use('',rutaProducts);
app.use('',rutaRegister);

// <<<<<<< HEAD
app.use('', rutaEdicion);
//=======
//=======
//>>>>>>> 1157206a8821b8a8c05d030c8dcdf1b73a8f560d

//>>>>>>> d7144dcf83eb9f45edffc8e77903df3d0da485fc

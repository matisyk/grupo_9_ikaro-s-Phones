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

<<<<<<< HEAD
//routers
app.use('/',rutaIndex);
app.use('/login',rutaLogin);
app.use('/products',rutaProducts);
app.use('/register',rutaRegister);

=======
app.get('/login', mainRoutes);
>>>>>>> 1157206a8821b8a8c05d030c8dcdf1b73a8f560d


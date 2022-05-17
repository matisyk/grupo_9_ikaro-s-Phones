const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, );

app.set('view engine', 'ejs')

app.use(express.static('public'));
app.use(express.static('views'));

const mainRoutes = require("./routers/routes")

app.use('/', mainRoutes)
app.post('/', (req, res) => {
   res.sendFile(path.resolve('./views/index.html'));
});

// app.get('/home', (req, res) => {
//     res.sendFile(path.resolve('./views/index.html'));
// });

app.get('/login', mainRoutes);

app.get('/register', mainRoutes);

app.get('/productCart', mainRoutes);

app.get('/productDetail', mainRoutes);

app.get('/editar', mainRoutes);
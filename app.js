const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, );

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.static('views'));

const mainRoutes = require("./routers/routes");

app.use('/', mainRoutes);
app.post('/', (req, res) => {
   res.sendFile(path.resolve('./views/index.html'));
});

// app.get('/home', (req, res) => {
//     res.sendFile(path.resolve('./views/index.html'));
// });

app.use('/login', mainRoutes);

app.use('/register', mainRoutes);

app.use('/productCart', mainRoutes);

app.use('/productDetail', mainRoutes);

app.use('/editar', mainRoutes);
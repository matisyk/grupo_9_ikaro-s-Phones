const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, );

app.use(express.static('public'));
app.use(express.static('views'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/index.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.resolve('./views/index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('./views/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve('./views/register.html'));
});

app.get('/productCart', (req, res) => {
    res.sendFile(path.resolve('./views/productCart.html'));
});

app.get('/productDetail', (req, res) => {
    res.sendFile(path.resolve('./views/productDetail.html'));
});
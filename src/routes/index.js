const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: "Novedades Max" });
});

router.get('/products', (req, res) => {
    res.render('products.html', { title: "Novedades Max" });
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: "Novedades Max" });
});

module.exports = router;
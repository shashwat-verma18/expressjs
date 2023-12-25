const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views/add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log('Title : '+ req.body.title);
    res.redirect("/");
});

router.get('/form', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views/form.html'));
});

router.post('/form', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views/success.html'));
});


module.exports = router;
const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const {getAddProduct, postAddProduct, getContact, getSuccess, postSuccess} = require('../controllers/product');

router.get('/add-product', getAddProduct);

router.post('/add-product', postAddProduct);

router.get('/form', getContact);

router.post('/success', postSuccess);

router.get('/success', getSuccess);


module.exports = router;
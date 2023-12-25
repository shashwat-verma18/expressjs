const express = require('express');

const router = express.Router();

const {getShop} = require('../controllers/product');

router.get("/", getShop);

module.exports = router;
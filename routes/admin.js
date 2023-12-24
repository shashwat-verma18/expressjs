const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title" style="padding:5px; margin:5px"><input type="text" name="size" style="padding:5px; margin:5px"><button typ="submit" style="padding:5px; margin:5px">Add Product</button</form>');
});

router.post('/product', (req, res, next) => {
    console.log('Title : '+ req.body.title);
    console.log('Size : '+ req.body.size);
    res.redirect("/");
});

module.exports = router;
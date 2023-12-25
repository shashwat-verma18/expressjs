const path = require('path');
const rootDir = require('../util/path');

const getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views/add-product.html'));
};

const postAddProduct = (req, res, next) => {
    res.redirect("/");
};

const getContact = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views/form.html'));
};


const postSuccess = (req, res, next) => {
    res.redirect("/admin/success");
};

const getSuccess = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views/success.html'));
};

const getShop = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views/shop.html'));
};

const getError = (req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, '../views/404.html'))
}

module.exports = {
    getAddProduct, 
    postAddProduct, 
    getContact, 
    getSuccess, 
    postSuccess,
    getShop,
    getError
};
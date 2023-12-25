const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

const {getError} = require('./controllers/product');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(getError);

app.listen(3000); 
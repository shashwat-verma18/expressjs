const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/add-product', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<form action="/product" method="POST"><input type="text" name="title" style="padding:5px; margin:5px"><input type="text" name="size" style="padding:5px; margin:5px"><button typ="submit" style="padding:5px; margin:5px">Add Product</button</form>');
});

app.post('/product', (req, res, next) => {
    console.log('Title : '+ req.body.title);
    console.log('Size : '+ req.body.size);
    res.redirect("/");
});

app.use("/", (req, res, next) =>{
    res.send('<h1>Hello from Express !</h1>')
})

app.listen(3000); 
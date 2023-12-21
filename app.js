const express = require('express');
const app = express();
const port = 3000;


const logMiddleware1 = (req, res, next) => {
    console.log(`Middleware 1`);
    next();
};

const logMiddleware2 = (req, res, next) => {
    console.log(`Middleware 2`);
    next();

};

app.use(logMiddleware1);
app.use(logMiddleware2);

app.get('/', (req, res) => {
    res.send('Welcome to Home Page!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
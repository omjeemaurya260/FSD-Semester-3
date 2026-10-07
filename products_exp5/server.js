const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static("."));

let products = [];

app.post('/products', (req, res) => {
    products.push(req.body);
    res.send("Product added");
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
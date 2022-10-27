const express = require("express");
const app = express();
const { products } = require("./data");
app.get('/', (req, res) => {
    res.status(202).send('<h1>home page</h1><a href="/api/products">products</a>')
})
app.get('/api/products', (req, res) => {
    const newProduct = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    })
    res.json(newProduct);
})
app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params;
    const singleProduct = products.find((product) => product.id == Number(productID))
    if (!singleProduct) {
        return res.status(404).send('<h2>product is not exist</h2>');
    }
    res.status(202).send(singleProduct);
})
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('hellow world');
})
app.get('/api/v1/query', (req, res) => {
    const { search_with_letter, limit } = req.query;
    let sortedProducts = [...products];
    if (search_with_letter) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search_with_letter);
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        return res.status(200).json({ sucess: true, data: [] })
    }
    res.status(200).json(sortedProducts);
})
app.get('*', (req, res) => {
    res.status(400).send('resource not found');
})
app.listen(3000, () => {
    console.log('server is listening on port 3000------')
})
const express = require('express');
const app = express();
const logger = require('./logger');
const authorise = require('./authorise');
const morgan = require('morgan')
app.use('/', [logger, morgan('tiny')]);
app.get('/', (req, res) => {
    res.send('Home')
})
app.get('/about', (req, res) => {
    res.send('about');
})
app.get('/api/v1/query', authorise, (req, res) => {
    console.log(req.user);
    res.send("hello authorise");
})
app.listen(3000, () => {
    console.log('server is listening on port 3000---')
})
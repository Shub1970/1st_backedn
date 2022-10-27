const express = require('express');
const app = express();
app.use(express.static('./disp'));
app.use(express.urlencoded({ extended: false }));
const { people } = require('./data')
app.get('/api/people', (req, res) => {
    res.status(202).send({ success: true, data: people })
})
app.post('/login', (req, res) => {
    console.log(req.body);
    const { firstName, lastName } = req.body;
    res.status(202).send(`welcome ${firstName} ${lastName}`)
})
app.listen(3000, () => {
    console.log('server is listening in 3000---')
})
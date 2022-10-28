const express = require('express');
const app = express();
app.use(express.static('./disp'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const { people } = require('./data')
app.get('/api/people', (req, res) => {
    res.status(202).send({ success: true, data: people })
})
app.post('/login', (req, res) => {
    console.log(req.body);
    const { firstName, lastName } = req.body;
    res.status(202).send(`welcome ${firstName} ${lastName}`)
})
app.post('/api/people', (req, res) => {
    const { name } = req.body;
    console.log(req.method);
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide name value' })
    }

    res.status(201).json({ success: true, person: name })
})
app.listen(3000, () => {
    console.log('server is listening in 3000---')
})
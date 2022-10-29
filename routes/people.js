const express = require('express');
const router = express.Router();

let { people } = require('../data')


router.get('/', (req, res) => {
    res.status(202).send({ success: true, data: people })
})
router.post('/', (req, res) => {
    const { name } = req.body;
    console.log(name);
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide name value' })
    }

    res.status(201).json({ success: true, person: name })
})
router.post('/postman', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide name value' })
    }
    res.status(202).json({ success: true, data: [...people, name] })
})

module.exports = router;
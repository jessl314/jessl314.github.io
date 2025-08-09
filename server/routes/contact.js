const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');


router.get('/', async (req, res) => {
    const contact = await Contact.find();
    res.json(contact);
});

router.put('/:id', async (req, res) => {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.json(updatedContact);
});
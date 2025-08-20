const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { asyncHandler } = require('../utils/asyncHandler.js');


router.get('/', asyncHandler(async (req, res) => {
    const contact = await Contact.find();
    res.status(200).json(contact);
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.status(200).json(updatedContact);
}));

module.exports = router;
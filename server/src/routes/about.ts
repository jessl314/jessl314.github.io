const express = require('express');
const router = express.Router();
const About = require('../models/About');
const { asyncHandler } = require('../utils/asyncHandler.js');

// get all about me info -> GET
router.get('/', asyncHandler(async (req, res) => {
    const about = await About.find();
    res.status(200).json(about);
}));

// update about me -> PUT, create a string for attribute and then send it to my API using put like this {bio: "new bio"}
router.put('/:id', asyncHandler(async (req, res) => {
    const updatedAbout = await About.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.status(200).json(updatedAbout);
}));


module.exports = router;



const express = require('express');
const router = express.Router();
const About = require('../models/About');

// get all about me info -> GET
router.get('/', async (req, res) => {
    const about = await About.find();
    res.json(about);
});

// update about me -> PUT, create a string for attribute and then send it to my API using put like this {bio: "new bio"}
router.put('/:id', async (req, res) => {
    const updatedAbout = await About.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.json(updatedAbout);
});



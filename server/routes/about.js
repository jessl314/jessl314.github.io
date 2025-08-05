const express = require('express');
const router = express.Router();
const About = require('../models/About');

// get all about me info -> GET
router.get('/', async (req, res) => {
    const about = await About.find();
    res.json(about);
});

router.post('/', async (req, res) => {
    const existingAbout = await About.findOne();
  if (existingAbout) {
    return res.status(400).json({ message: 'About section already exists' });
  }
    const newAbout = new About({

    })
})

// update about me -> PUT, create a string for attribute and then send it to my API using put like this {bio: "new bio"}
router.put('/:id', async (req, res) => {
    const updatedAbout = await About.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.json(updatedAbout);
});

router.delete('/:id', async (req, res) => {
    await About.findByIdAndDelete(req.params.id);
    res.json({message: 'About deleted'})
})




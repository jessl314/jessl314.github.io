const express = require('express');
const router = express.Router();
const Hero = require('../models/Hero');

router.get('/', async (req, res) => {
    const hero = await Hero.find();
    res.json(hero);
});

router.put('/:id', async (req, res) => {
    const updatedHero= await Hero.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.json(updatedHero);
});

module.exports = router;
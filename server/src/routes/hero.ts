const express = require('express');
const router = express.Router();
const Hero = require('../models/Hero');
const { asyncHandler } = require('../utils/asyncHandler.js');

router.get('/', asyncHandler(async (req, res) => {
    const hero = await Hero.find();
    res.status(200).json(hero);
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const updatedHero= await Hero.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.status(200).json(updatedHero);
}));

module.exports = router;
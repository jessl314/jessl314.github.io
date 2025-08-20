const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');
const { asyncHandler } = require('../utils/asyncHandler.js');


// GET
router.get('/', asyncHandler(async (req, res) => {
    const experience = await Experience.find();
    res.status(200).json(experience);
}));

// POST
router.post('/', asyncHandler(async (req, res) => {
    const newExperience = new Experience({
        role: req.body.role,
        company: req.body.company,
        location: req.body.location,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        description: req.body.description,
        skills: req.body.skills,
        type: req.body.type,
    });
    await newExperience.save();
    res.status(200).json(newExperience);
}));

// PUT
router.put('/:id', asyncHandler(async (req, res) => {
    const updatedExperience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new : true});
    res.status(200).json(updatedExperience);
}));

// DELETE
router.delete('/:id', asyncHandler(async (req, res) => {
    await Experience.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Experience deleted"});
}));

module.exports = router;
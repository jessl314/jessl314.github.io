const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

// GET
router.get('/', async (req, res) => {
    const experience = await Experience.find();
    res.json(experience);
})

// POST
router.post('/', async (req, res) => {
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
    res.json(newExperience);
})


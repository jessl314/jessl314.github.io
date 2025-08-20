const express = require('express');
const router = express.Router();
const Project = require('../models/Projects');
const { asyncHandler } = require('../utils/asyncHandler.js');


// GET
router.get('/', asyncHandler(async (req, res) => {
    const project = await Project.find();
    res.json(project);
}));


// POST
router.post('/', asyncHandler(async (req, res) => {
    const newProject = new Project({
        title: req.body.title,
        description: req.body.description,
        techStack: req.body.techStack,
        githubLink: req.body.githubLink,
        demoLink: req.body.demoLink,
        startDate: req.body.startDate,
        endDate: req.body.endDate
    });
    await newProject.save();
    res.json(newProject);
}));

// PUT
router.put('/:id', asyncHandler(async (req, res) => {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new : true});
    res.json(updatedProject);
}));

// DELETE
router.delete('/:id', asyncHandler(async (req, res) => {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted"});
}));

module.exports = router;
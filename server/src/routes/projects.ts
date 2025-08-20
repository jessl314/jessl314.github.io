import { Router, type Request, type Response } from 'express';
import Project from '../models/Projects.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router: Router = Router();

// GET
router.get('/', asyncHandler(async (req: Request, res: Response) => {
    const project = await Project.find();
    res.json(project);
}));

// POST
router.post('/', asyncHandler(async (req: Request, res: Response) => {
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
router.put('/:id', asyncHandler(async (req: Request, res: Response) => {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new : true});
    res.json(updatedProject);
}));

// DELETE
router.delete('/:id', asyncHandler(async (req: Request, res: Response) => {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted"});
}));

export default router;
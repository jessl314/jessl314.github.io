import { Router, type Request, type Response } from 'express';
import Experience from '../models/Experience';
import { asyncHandler } from '../utils/asyncHandler';

const router: Router = Router();

// GET
router.get('/', asyncHandler(async (req: Request, res: Response) => {
    const experience = await Experience.find();
    res.status(200).json(experience);
}));

// POST
router.post('/', asyncHandler(async (req: Request, res: Response) => {
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
router.put('/:id', asyncHandler(async (req: Request, res: Response) => {
    const updatedExperience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new : true});
    res.status(200).json(updatedExperience);
}));

// DELETE
router.delete('/:id', asyncHandler(async (req: Request, res: Response) => {
    await Experience.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Experience deleted"});
}));

export default router;
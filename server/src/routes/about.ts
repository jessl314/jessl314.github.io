import { Router, type Request, type Response } from 'express';
import About from '../models/About.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router: Router = Router();

// get all about me info -> GET
router.get('/', asyncHandler(async (req: Request, res: Response) => {
    const about = await About.find();
    res.status(200).json(about);
}));

// update about me -> PUT, create a string for attribute and then send it to my API using put like this {bio: "new bio"}
router.put('/:id', asyncHandler(async (req: Request, res: Response) => {
    const updatedAbout = await About.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.status(200).json(updatedAbout);
}));


export default router;



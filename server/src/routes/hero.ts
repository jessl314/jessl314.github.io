import { Router, type Request, type Response } from 'express';
import Hero from '../models/Hero.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router: Router = Router();

router.get('/', asyncHandler(async (req: Request, res: Response) => {
    const hero = await Hero.find();
    res.status(200).json(hero);
}));

router.put('/:id', asyncHandler(async (req: Request, res: Response) => {
    const updatedHero = await Hero.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.status(200).json(updatedHero);
}));

export default router;
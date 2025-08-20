import { Router, type Request, type Response } from 'express';
import Contact from '../models/Contact.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router: Router = Router();

router.get('/', asyncHandler(async (req: Request, res: Response) => {
    const contact = await Contact.find();
    res.status(200).json(contact);
}));

router.put('/:id', asyncHandler(async (req: Request, res: Response) => {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.status(200).json(updatedContact);
}));

export default router;
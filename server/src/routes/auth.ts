import express, { Router, type Request, type Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import jsonwebtoken from "jsonwebtoken";

const app = express();
const router: Router = Router();
app.use(express.json());

// Add your authentication routes here
// Example:
// router.post('/register', asyncHandler(async (req: Request, res: Response) => { ... }));

router.post('/login', asyncHandler(async (req: Request, res: Response) => {
    const username = req.body.username
}));

export default router;

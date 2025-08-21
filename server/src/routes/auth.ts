import express, { Router, type Request, type Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import User from '../models/User';
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import 'dotenv/config';

const app = express();
const router: Router = Router();
app.use(express.json());

// req is the information that the client gives server
// response is the result of server handling this information
router.post('/register', asyncHandler(async (req: Request, res: Response) => {
    const { username, password } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        // can display just the message/prevent login in the frontend
        return res.status(400).json({ message: 'Username already exists'});
    }

    // hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user
    const newUser = new User({
        username,
        password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully "});
}));

router.post('/login', asyncHandler(async (req: Request, res: Response) => {
    const username = req.body.username
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials'});
    }
    const payload = { id: user._id };
    const accessToken = process.env.ACCESS_TOKEN_SECRET as string;
    const token = jwt.sign(payload, accessToken, { expiresIn: '1h'});
    res.status(200).json({ token });
}));

router.post('/token', asyncHandler(async (req: Request, res: Response) => {
    const refreshToken = req.body.token;
    if (!refreshToken) {
        return res.status(401).json({ message: 'Invalid refresh token'});
    }

    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET as string) as { id: string };
        
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: 'User not found'});
        }
        const newAccessToken = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET as string,
            { expiresIn: '1h' }
        );
        res.status(200).json({ accessToken: newAccessToken });
    } catch (error) {
        console.error('Refresh token verification failed:', error);
        return res.status(403).json({ message: 'Invalid or expired refresh token' });
    }
}))
export default router;

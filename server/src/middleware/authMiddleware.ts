import { type Request, type Response, type NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Add a custom property to the Express Request interface
// so we can attach the user's ID after authentication.
declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

const secretKey: string = process.env.ACCESS_TOKEN_SECRET as string;

// Middleware to protect routes
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // 1. Get the authorization header from the request
  const authHeader = req.headers.authorization;

  // 2. Check if the token exists
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header is missing' });
  }

  // 3. Extract the token (e.g., "Bearer YOUR_TOKEN")
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Token is missing' });
  }

  // 4. Verify the token using your secret key
  try {
    const decoded = jwt.verify(token, secretKey) as { id: string };

    // 5. Attach the user's ID to the request object
    //    This makes the user ID available in all subsequent route handlers.
    req.userId = decoded.id;

    // 6. Call next() to proceed to the next middleware or the route handler
    next();
  } catch (error) {
    // 7. If verification fails send a 403 Forbidden error
    console.error('JWT verification failed:', error);
    res.status(403).json({ message: 'Invalid or expired token' });
  }
};

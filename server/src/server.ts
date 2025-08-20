import express, { type Request, type Response, type NextFunction } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import aboutRoutes from './routes/about';
import projectRoutes from './routes/projects';
import contactRoutes from './routes/contact';
import experienceRoutes from './routes/experience';
import heroRoutes from './routes/hero';

const app = express()
const PORT = process.env.PORT || 5000;

// Middleware to handle frontend/backend connection
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// connection uri to mongodb cluster/cloud
const uri: string | undefined = process.env.MONGO_URI;

// Test route to verify server is working
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Server is running!' });
});

// bridge inside Express backend that makes the routes in route files available as HTTP endpoints
app.use('/api/about', aboutRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/hero', heroRoutes);

// Error handling middleware should come AFTER routes
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if ('status' in err) {
      // TypeScript now knows that 'err' has a 'status' property
      res.status(err.status as number).send(err.message);
    } else {
      // Handle the generic error case
      res.status(500).send('An unexpected error occurred.');
    }
});


// mongodb connection + start server

if (uri) {
  mongoose.connect(uri).then(() => {
    console.log('MongoDB connected successfully!');
  }).catch(err => {
    console.error('MongoDB connection error:', err);
  });
} else {
  // Handle the case where the URI is missing
  console.error('MONGO_URI environment variable is not defined!');
}

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('database connection established successfully');
}).on('error', (error) => {
    console.log("database connection error: ", error);
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))





import express, { type Request, type Response, type NextFunction } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import aboutRoutes from './routes/about.js';
import projectRoutes from './routes/projects.js';
import contactRoutes from './routes/contact.js';
import experienceRoutes from './routes/experience.js';
import heroRoutes from './routes/hero.js';

const app = express()
const PORT = process.env.PORT || 5000;

// Middleware to handle frontend/backend connection
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// connection uri to mongodb cluster/cloud
const uri: string | undefined = process.env.MONGO_URI;

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if ('status' in err) {
      // TypeScript now knows that 'err' has a 'status' property
      res.status(err.status as number).send(err.message);
    } else {
      // Handle the generic error case
      res.status(500).send('An unexpected error occurred.');
    }
});

// bridge inside Express backend that makes the routes in route files available as HTTP endpoints
app.use('/api/about', aboutRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/about', contactRoutes);
app.use('/api/projects', experienceRoutes);
app.use('/api/about', heroRoutes);


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





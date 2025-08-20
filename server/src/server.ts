import express, { type Request, type Response, type NextFunction } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import aboutRoutes from '../routes/about.ts';
import projectRoutes from '../routes/projects.ts';
import contactRoutes from '../routes/contact.ts';
import experienceRoutes from '../routes/experience.ts';
import heroRoutes from '../routes/hero.ts';

const app = express()
const PORT = process.env.PORT || 5000;

// Middleware to handle frontend/backend connection
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// connection uri to mongodb cluster/cloud
const uri = process.env.MONGO_URI;

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  if (res.headersSent) {
    return next(err);
  }

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error"
  });
});

// bridge inside Express backend that makes the routes in route files available as HTTP endpoints
app.use('/api/about', aboutRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/about', contactRoutes);
app.use('/api/projects', experienceRoutes);
app.use('/api/about', heroRoutes);


// mongodb connection + start server

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
}).catch(err => console.error(err));

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('database connection established successfully');
}).on('error', (error) => {
    console.log("database connection error: ", error);
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))





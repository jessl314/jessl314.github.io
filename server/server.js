const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 5000;

// Middleware to handle frontend/backend connection
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// connection uri to mongodb cluster/cloud
const uri = process.env.MONGO_URI;

// Routes
const aboutRoutes = require('./routes/about')
const projectRoutes = require('./routes/projects')
const contactRoutes = require('./routes/contact')
const experienceRoutes = require('./routes/experience')
const heroRoutes = require('./routes/hero')

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





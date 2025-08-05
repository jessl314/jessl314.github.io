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
const aboutRoute = require('./routes/about')
const projectRoute = require('./routes/projects')
const contactRoute = require('./routes/contact')
const experienceRoute = require('./routes/experience')
const heroRoute = require('./routes/hero')

app.use('/api/about', aboutRoute);
app.use('/api/projects', projectRoute);
app.use('/api/about', contactRoute);
app.use('/api/projects', experienceRoute);
app.use('/api/about', heroRoute);


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





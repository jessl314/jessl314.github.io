const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

// Middleware to handle frontend/backend connection
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// connection uri to mongodb cluster/cloud
const uri = process.env.MONGO_URI;


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

// HERO ---------------------------
const heroSchema = new mongoose.Schema( {
    animated: String,
    elevPitch: String
})

module.exports = mongoose.model('Hero', heroSchema);

// PROJECTS----------
const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    techStack: [String],
    githubLink: String,
    liveDemoLink: String,
    startDate: String,
    endDate: String,
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Projects', projectSchema);

const experienceSchema = new mongoose.Schema({
    role: String,
    company: String,
    location: String,
    startDate: String,
    endDate: String,
    description: [String],
    skills: [String],
    type: {
        type: String,
        enum: ['Technical', 'Additional'],
        default: 'Technical'
    },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Experience', experienceSchema);

//ABOUT ME --------------------------
// education
const educationSchema = new mongoose.Schema({
    school: String,
    degree: String,
    minor: String,
    startYear: Number,
    endYear: String
}, {_id: false}) // Prevents automatic _id generation for subdoc

// about me bio + profile image
const aboutSchema = new mongoose.Schema({
    content: String,
    profileImage: String,
    Education: [educationSchema],
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('About', aboutSchema);

// CONTACT --------------

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    linkedin: String,
    githubLink: String,
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Contact', contactSchema);

const mongoose = require('mongoose');

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
    education: [educationSchema],
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('About', aboutSchema);


const mongoose = require('mongoose');

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
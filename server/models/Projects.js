const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    techStack: [String],
    githubLink: String,
    demoLink: String,
    startDate: String,
    endDate: String,
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Projects', projectSchema);
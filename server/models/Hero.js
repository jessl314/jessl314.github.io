const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema( {
    animated: String,
    elevPitch: String
})

module.exports = mongoose.model('Hero', heroSchema);
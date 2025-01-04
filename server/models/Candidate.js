const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true } // For blockchain integration
});

module.exports = mongoose.model('Candidate', candidateSchema);
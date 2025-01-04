// server/models/Voter.js
const mongoose = require('mongoose');

const voterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true }, // For blockchain integration
    hasVoted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Voter', voterSchema);
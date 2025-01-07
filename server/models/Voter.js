const mongoose = require('mongoose');

const voterSchema = new mongoose.Schema({
    voterId: { type: String, required: true, unique: true },
    hashedData: { type: String, required: true },
    blockchainTxHash: { type: String, required: true },
    // ... other fields (optional)
});

module.exports = mongoose.model('Voter', voterSchema);
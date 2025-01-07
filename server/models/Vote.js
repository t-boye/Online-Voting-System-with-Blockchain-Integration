const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  voterIndex: { type: String, required: true }, // Assuming voter also uses an index
  candidateIndex: { type: String, required: true },
});

module.exports = mongoose.model('Votes', voteSchema);
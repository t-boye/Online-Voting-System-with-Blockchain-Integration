const Vote = require('../models/Vote');

const voteController = {
  castVote: async (req, res) => {
    try {
      const { voterIndex, candidateIndex } = req.body;

      // Check if the voter has already voted (optional)
      const existingVote = await Vote.findOne({ voterIndex });
      if (existingVote) {
        return res.status(400).json({ error: 'Voter has already cast a vote.' });
      }

      const newVote = new Vote({ voterIndex, candidateIndex });
      const savedVote = await newVote.save();

      res.status(201).json({ message: 'Vote cast successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error casting vote.' });
    }
  },

  // Add other vote-related methods here (e.g., get all votes, get vote results)
};

module.exports = voteController;
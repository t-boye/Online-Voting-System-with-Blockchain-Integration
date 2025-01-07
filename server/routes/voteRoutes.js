const express = require('express');
const router = express.Router();
const Vote = require('../models/Vote');

router.post('/castVote', async (req, res) => {
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
});

module.exports = router;
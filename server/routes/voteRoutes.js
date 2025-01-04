const express = require('express');
const router = express.Router();
const Vote = require('../models/Vote');
// ... (Blockchain interaction code will be added here)

// Cast a vote
router.post('/castVote', async (req, res) => {
    try {
        const { voterAddress, candidateAddress } = req.body;
        const newVote = new Vote({ voterAddress, candidateAddress });
        const savedVote = await newVote.save();
        // ... (Call the blockchain contract's 'castVote' function)
        res.status(201).json(savedVote);
    } catch (error) {
        res.status(500).json({ error: 'Error casting vote' });
    }
});

// Get all votes
router.get('/', async (req, res) => {
    try {
        const votes = await Vote.find();
        res.json(votes);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching votes' });
    }
});

module.exports = router;
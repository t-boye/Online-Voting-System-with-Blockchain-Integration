const express = require('express');
const router = express.Router();
const Candidate = require('../models/Candidate');

// Register a candidate
router.post('/register', async (req, res) => {
    try {
        const { name, address } = req.body;
        const newCandidate = new Candidate({ name, address });
        const savedCandidate = await newCandidate.save();
        res.status(201).json(savedCandidate);
    } catch (error) {
        res.status(500).json({ error: 'Error registering candidate' });
    }
});

// Get all candidates
router.get('/', async (req, res) => {
    try {
        const candidates = await Candidate.find();
        res.json(candidates);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching candidates' });
    }
});

module.exports = router;
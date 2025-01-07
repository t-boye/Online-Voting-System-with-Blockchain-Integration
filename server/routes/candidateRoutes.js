const express = require('express');
const router = express.Router(); // Import the Router

// Import the Candidate model (assuming it's defined in a separate file)
const Candidate = require('../models/Candidate');

// Validation middleware (optional, but recommended)
const validateCandidate = require('../middleware/validateCandidate'); // Import validation logic

router.post('/register', validateCandidate, async (req, res) => {
  try {
    const newCandidate = new Candidate(req.body);
    const savedCandidate = await newCandidate.save();
    res.status(201).json(savedCandidate);
  } catch (error) {
    if (error.code === 11000) { // Handle unique index violation
      return res.status(400).json({ error: 'Index number already exists' });
    }
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({ error: 'Error registering candidate' });
  }
});

module.exports = router;
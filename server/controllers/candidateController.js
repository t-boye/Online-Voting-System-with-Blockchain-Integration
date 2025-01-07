const Candidate = require('../models/Candidate');

const candidateController = {
  registerCandidate: async (req, res) => {
    try {
      const { name, indexNumber } = req.body;

      const newCandidate = new Candidate({ name, indexNumber });
      const savedCandidate = await newCandidate.save();

      res.status(201).json(savedCandidate);
    } catch (error) {
      if (error.code === 11000) { // Handle unique index violation
        return res.status(400).json({ error: 'Index number already exists' });
      }
      res.status(500).json({ error: 'Error registering candidate' });
    }
  },

  getAllCandidates: async (req, res) => {
    try {
      const candidates = await Candidate.find();
      res.json(candidates);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching candidates' });
    }
  },
};

module.exports = candidateController;
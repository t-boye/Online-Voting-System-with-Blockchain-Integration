const Voter = require('../models/Voter');

const voterController = {
  registerVoter: async (req, res) => {
    try {
      const { name, indexNumber } = req.body; 

      const newVoter = new Voter({ name, indexNumber });
      const savedVoter = await newVoter.save();

      res.status(201).json(savedVoter);
    } catch (error) {
      if (error.code === 11000) { // Handle unique index violation
        return res.status(400).json({ error: 'Index number already exists' });
      }
      res.status(500).json({ error: 'Error registering voter' });
    }
  },

  getAllVoters: async (req, res) => {
    try {
      const voters = await Voter.find();
      res.json(voters);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching voters' });
    }
  },
};

module.exports = voterController;
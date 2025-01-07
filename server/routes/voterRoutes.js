const express = require('express');
const router = express.Router();
const Voter = require('../models/voter');
const blockchainService = require('../services/blockchainService'); 

router.post('/register', async (req, res) => {
  try {
    const { name, indexNumber } = req.body;

    // Hash the voter data
    const hashedData = crypto.createHash('sha256').update(`${name}-${indexNumber}`).digest('hex'); 

    // Submit hashed data to blockchain
    const blockchainTxHash = await blockchainService.submitData(hashedData);

    // Create and save voter record
    const newVoter = new Voter({ 
      voterId: generateUniqueVoterId(), 
      hashedData, 
      blockchainTxHash 
    });
    await newVoter.save();

    res.status(201).json({ message: 'Voter registered successfully' }); 
  } catch (error) { 
    // ... (error handling)
  }
});

// ... (voter verification route) 

module.exports = router;
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST /api/contact
// @desc    Submit a contact form
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Create new contact message
    const contact = new Contact({
      name,
      email,
      message
    });
    
    // Save to database
    await contact.save();
    
    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

module.exports = router;
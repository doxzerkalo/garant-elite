const express = require('express');
const router = express.Router();

// Model for Deal (this should be defined according to your database setup)
const Deal = require('../models/Deal'); // Adjust the path based on your project structure

// POST endpoint to create a new deal
router.post('/createDeal', async (req, res) => {
    try {
        const { title, description, value } = req.body;

        // Validate input data here (optional)

        const newDeal = new Deal({
            title,
            description,
            value,
            createdAt: new Date()
        });

        await newDeal.save();
        res.status(201).json({ message: 'Deal created successfully', deal: newDeal });
    } catch (error) {
        res.status(500).json({ message: 'Error creating deal', error: error.message });
    }
});

module.exports = router;
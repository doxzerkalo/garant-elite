// API endpoint to join an existing deal

const express = require('express');
const router = express.Router();
const Deal = require('../models/Deal');  // Assuming there's a Deal model

/**
 * @route POST /api/joinDeal
 * @desc Join an existing deal
 * @access Public
 */
router.post('/joinDeal', async (req, res) => {
    const { dealId, userId } = req.body;  // Assuming dealId and userId are sent in the body

    try {
        // Find the deal by ID
        const deal = await Deal.findById(dealId);
        if (!deal) {
            return res.status(404).json({ message: 'Deal not found' });
        }

        // Add the user to the deal participants
        deal.participants.push(userId);
        await deal.save();

        res.status(200).json({ message: 'Successfully joined the deal', deal });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
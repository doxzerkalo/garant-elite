const express = require('express');
const router = express.Router();

// Mock database for disputes
let disputes = [];

// API endpoint to open a dispute
router.post('/open', (req, res) => {
    const { userId, reason } = req.body;

    if (!userId || !reason) {
        return res.status(400).json({ message: 'User ID and reason are required.' });
    }

    const dispute = {
        id: disputes.length + 1,
        userId,
        reason,
        status: 'open',
        createdAt: new Date()
    };

    disputes.push(dispute);
    res.status(201).json(dispute);
});

module.exports = router;
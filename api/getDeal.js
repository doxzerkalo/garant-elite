const express = require('express');
const router = express.Router();

// Mock data for demonstration
const deals = [
    { id: 1, title: 'Deal 1', description: 'Description for Deal 1' },
    { id: 2, title: 'Deal 2', description: 'Description for Deal 2' }
];

// API endpoint to get deal details by ID
router.get('/api/getDeal/:id', (req, res) => {
    const dealId = parseInt(req.params.id);
    const deal = deals.find(d => d.id === dealId);

    if (deal) {
        res.status(200).json(deal);
    } else {
        res.status(404).json({ message: 'Deal not found' });
    }
});

module.exports = router;
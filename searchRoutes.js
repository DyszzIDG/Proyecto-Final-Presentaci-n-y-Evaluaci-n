const express = require('express');
const router = express.Router();
const connectToDatabase = require('../db');

// Filter by category
router.get('/api/secondchance/search', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('items');
        
        let query = {};
        if (req.query.category) {
            query.category = req.query.category;
        }
        
        const items = await collection.find(query).toArray();
        res.json(items);
    } catch (e) {
        res.status(500).send("Error searching items");
    }
});

module.exports = router;

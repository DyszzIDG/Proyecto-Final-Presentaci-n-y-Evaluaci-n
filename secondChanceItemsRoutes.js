const express = require('express');
const router = express.Router();
const connectToDatabase = require('../db');
const { ObjectId } = require('mongodb');

// Get all items
router.get('/api/secondchance/items', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const items = await db.collection('items').find({}).toArray();
        res.json(items);
    } catch (e) {
        res.status(500).send("Error fetching items");
    }
});

// Get single item
router.get('/api/secondchance/items/:id', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const item = await db.collection('items').findOne({ _id: new ObjectId(req.params.id) });
        res.json(item);
    } catch (e) {
        res.status(500).send("Error fetching item");
    }
});

// Add new item (POST upload)
router.post('/api/secondchance/items', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const newItem = req.body;
        const result = await db.collection('items').insertOne(newItem);
        res.status(201).json(result);
    } catch (e) {
        res.status(500).send("Error adding item");
    }
});

// Delete an item
router.delete('/api/secondchance/items/:id', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const result = await db.collection('items').deleteOne({ _id: new ObjectId(req.params.id) });
        res.json(result);
    } catch (e) {
        res.status(500).send("Error deleting item");
    }
});

module.exports = router;

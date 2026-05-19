const { MongoClient } = require('mongodb');
require('dotenv').config();

let dbInstance = null;

async function connectToDatabase() {
    if (dbInstance) return dbInstance;
    
    const client = new MongoClient(process.env.MONGO_URL);
    
    // Task 4: Connect to MongoDB using await client.connect()
    await client.connect();
    
    dbInstance = client.db('secondChance');
    console.log("Connected successfully to server");
    return dbInstance;
}

module.exports = connectToDatabase;

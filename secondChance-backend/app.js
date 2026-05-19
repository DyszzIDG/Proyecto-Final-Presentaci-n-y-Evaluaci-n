const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const secondChanceItemsRoutes = require('./routes/secondChanceItemsRoutes');
const searchRoutes = require('./routes/searchRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/', secondChanceItemsRoutes);
// Task 7: Route serving /api/secondchance/search
app.use('/', searchRoutes); 
app.use('/api/auth', authRoutes);

module.exports = app;

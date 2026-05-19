require('dotenv').config();
const app = require('./app');
// Task 8: Import npm package natural
const natural = require('natural');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

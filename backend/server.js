const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// API routes
app.get('/', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

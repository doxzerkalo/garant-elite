const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API Endpoints
app.get('/api/example', (req, res) => {
    res.json({ message: 'This is an example endpoint' });
});
// Add more API endpoints here

// Wildcard route for all other requests (404 Not Found)
app.use((req, res) => {
    res.status(404).send('Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
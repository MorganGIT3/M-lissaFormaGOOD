const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the dist/public directory
app.use(express.static(path.join(__dirname, '../dist/public')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/public/index.html'));
});

module.exports = app;

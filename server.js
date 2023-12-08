const express = require('express');
const path = require('path');
const sequelize = require('./db');

const app = express();
const port = process.env.PORT || 8080;

const htmlFilePath = path.join(__dirname, 'index.html');

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static(__dirname));

// Define a route to serve your HTML file
app.get('/', (req, res) => {
   res.sendFile(htmlFilePath);
});

app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});

sequelize
   .authenticate()
   .then(() => console.log('Connected.'))
   .catch((err) => console.error('Connection error: ', err));
const express = require('express');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');

const app = express();

connectDB();

app.get('/', (req, res) => res.send("API is active."));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
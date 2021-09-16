const express = require('express');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');

const app = express();

connectDB();

//Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send("API is active."));

app.use('/types', require('./routes/api/types'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
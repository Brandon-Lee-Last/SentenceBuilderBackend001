const express = require('express');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

connectDB();

app.use(
    cors({
    origin: '*',
    credentials: true,
    })
);

//Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send("API is active."));

app.use('/types', require('./routes/api/types'));
app.use('/sentences', require('./routes/api/sentences'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
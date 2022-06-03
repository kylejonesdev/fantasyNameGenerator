const express = require('express');
require('dotenv').config();
const nameGenerator = require('./nameGenerator');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/api/generateName/', (req, res) => {
    const seedFirstName = req.body.firstName
    const seedLastName = req.body.lastName;
    const fName = nameGenerator.constructName(nameGenerator.convertStringToSeed(seedFirstName));
    const lName = nameGenerator.constructName(nameGenerator.convertStringToSeed(seedLastName));
    res.json({ fName, lName });
})
app.get('/api/generateName', (req, res) => {
    const fName = nameGenerator.constructName(Math.random());
    const lName = nameGenerator.constructName(Math.random());
    res.json({ fName, lName });
})
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}.`);
})
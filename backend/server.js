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
    console.log(`First Name: ${seedFirstName} Last Name: ${seedLastName}`);
    let seed = 0;
    let stringPosition = 1;
    
    for (const char of seedString) {
        seed = seed + (char.charCodeAt(0) * stringPosition)
        stringPosition++;
    }
    res.json({ fantasyName: nameGenerator.constructName(seed) });
})
app.get('/api/generateName', (req, res) => {
    res.json({ fantasyName: nameGenerator.constructName(Math.random()) });
})
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}.`);
})
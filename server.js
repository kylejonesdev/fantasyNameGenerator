const express = require('express');
require('dotenv').config();
const nameGenerator = require('./nameGenerator');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.post('/api/generateName/', (req, res) => {
    const seedFirstName = req.body.firstName
    const seedLastName = req.body.lastName;
    const fName = nameGenerator.constructName(nameGenerator.convertStringToSeed(seedFirstName));
    const lName = nameGenerator.constructName(nameGenerator.convertStringToSeed(seedLastName));
    res.render('results.ejs', { fName, lName });
})
app.get('/api/generateName', (req, res) => {
    const fName = nameGenerator.constructName(Math.random());
    const lName = nameGenerator.constructName(Math.random());
    res.render('results.ejs', { fName, lName });
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}.`);
})
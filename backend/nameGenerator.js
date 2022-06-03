const nameArr = require('./nameArray');

//generate n seed-based numbers between 0 and 99 from the inputed users first and last name
function generateSeedNumbers(numOfSeeds, seed = 1) {
    const seedFactor = 3761;
    let seedNumbers = [];
    if(seed < 1) seed = Math.floor(Math.random() * seedFactor); //control for edge cases
    for(let i = 0; i < numOfSeeds; i ++) {
        seedNumbers[i] = seed % 100;
        //calculate a new seed base for the next iteration. Math is arbitrary.
        seed = seed * seedFactor % 267512;
        console.log(seed);
    }
    return seedNumbers;
}
//assemble the first, middle, and last mini-strings into a first name and last name, then output it to the DOM
function constructName(seed) {
    let arrOfSeeds = generateSeedNumbers(6, seed);
    let nameOutput = '';
    for (let i = 0; i < arrOfSeeds.length; i ++){
        //select item from nameArr from a [seed-based row] and the [first, second, or third] column
        nameOutput += nameArr[arrOfSeeds[i]][i % 3];
        if(i === 2) nameOutput += ' ';
    }
    return nameOutput;
}

module.exports = { generateSeedNumbers, constructName }
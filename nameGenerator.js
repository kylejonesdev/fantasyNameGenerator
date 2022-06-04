const nameArr = require('./nameArray');

//convert a string of letters to a seed number
//@params string A-Z and a-z
//@return int
function convertStringToSeed(seedString) {
    let seed = 0;
    let stringPosition = 1; //makes the seed sensitive to the position of each char
    
    for (const char of seedString) {
        seed = seed + (char.charCodeAt(0) * stringPosition)
        stringPosition++;
    }
    return seed;
}

//generate n seed-based numbers between 0 and 99
//@params number of seed numbers desired; starting seed
//@returns an array of the generated seed numbers
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
//assemble the first, middle, and last mini-strings into a name
function constructName(seed) {
    let arrOfSeeds = generateSeedNumbers(3, seed);
    let nameOutput = '';
    for (let i = 0; i < arrOfSeeds.length; i ++){        
        nameOutput += nameArr[arrOfSeeds[i]][i % 3]; //select item from nameArr from a [seed-based row] and the [first, second, or third] column
    }
    return nameOutput;
}

module.exports = { convertStringToSeed, generateSeedNumbers, constructName }
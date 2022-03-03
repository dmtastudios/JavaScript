// VARIABLES (for storing and assigning values)
/*
    Syntax for Variables...

    variableType variableName = value
*/
// NOTE: variable name should be in camel casing

// LET is the variable type
// mcuMovies is the variableName
// 27 is the value set

let mcuMovies = 27;

// 27 displays in the terminal at runtime
console.log(mcuMovies);

// mcuMovies = 28;

console.log(mcuMovies);

mcuMovies = mcuMovies + 2

console.log(mcuMovies);

// mcuMovies += 2;
// mcuMovies -= 2;

// mcuMovies ++;
// mcuMovies --;
// mcuMovies = true;
// mcuMovies = null;

let avengersMovies = 4;
console.log(avengersMovies);

let nonavengersMovies = mcuMovies - avengersMovies;
console.log(nonavengersMovies);

// Const is used for unchangeable variable values
const mcuPhases = 4
// Cannot reassign a const variable type

var theRealOG = 1995

console.log(theRealOG);

const firstName = "My First Name";
const lastName = "My Last Name";

// console.log(firstName + lastName);

const fullName = firstName + lastName;

console.log(fullName);

// console.log(mcuMovies);
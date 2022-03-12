// LOGICAL OPERATORS
// Logical operators are used to return a True or False value base off of two Boolean values (AKA true or False)

// AND '&&' or a double ampersand
// Returns true only when both conditions are true. If at least one condition is false, then it will return as false.
// Example 1
let andOne = true && false;
console.log(andOne); //false

let test = false && false;
console.log(test);

// Example 2
let andTwo = 5 < 6 && 10 >= 10;
// let andTwo = true && true;
// console.log(andTwo);

// Example 3
let andThree = "Hello!".length === 6 && 10 === "10";
// let andThree = "Hello!".length === 10;
console.log(andThree);

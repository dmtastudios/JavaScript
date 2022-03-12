// Ternary Review
// Big Picture:
// Similar to an IF/ELSE statement, a Ternary Operator has single condition as well as two possible actions to be completed based on the condition being true or false. However, a Ternary Operator can be written on a single line.

/*
Syntax

(condition) ? value : value;
*/

let austin = `Austin`;
let isAustin = (austin.length === 6) ? `Yup! That's Austin!` : `NO idea who that is`;

console.log(isAustin);
// let isAustin = (true) ? `Yup! That's Austin!` : `NO idea who that is`;
// let isAustin = `Yup! That's Austin!`;

// The ternary is looking to see if (austin.length === 6) is true, if it is whatever is written to the LEFT of the colon will run, otherwise if it is false whatever is on the RIGHT side of the colon will run.

// Example of False
let austin2 = `Tom Bombadil`;
let isAustin2 = (austin2.length === 6) ? `Yup! That's Austin!` : `NO idea who that is`;

console.log(isAustin2);

let password = `password`;
let correct = (austin2.length === 6)


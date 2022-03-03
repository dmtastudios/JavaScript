// TEMPLATE LITERALS
// New way to concatenate strings

// Example of a Template Literal
// Template literals use back-ticks (``) instead of quotes or ('',"")
const example = `This is a template literal`;
console.log(example);

// Template Literals recognizes line breaks

// Example of a line break in a regular string
const linesOne = "First Line\nSecond Line"
console.log(linesOne);

// const badExample = "First Line
// Second Line";
// console.log(badExample);

// Example of a line break in a Template Literal
const LinesTwo = `1st Line
2nd Line`;
console.log(LinesTwo);

// Concatenation with Template Literals
// Examples of Concatenation with regular strings
const myName = "David"+" "+"Williams"
console.log(myName);

// Examples of Expression Interpolation (AKA String Concatenation with Template Literals)
// Uses ${} instead of a plus sign
let fullName = `David${` `}Williams`;
// const myName = "David"+" "+"Williams" // same output
console.log(fullName);

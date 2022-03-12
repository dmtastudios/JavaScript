// COMPARISON OPERATORS
// Comparison Operators are used to return a True or False Boolean value when comparing two values

// Greater than '>'
console.log(3 > 1); //true statement

// Less than '<'
console.log(3 < 1); //false statement

// Greater than or Equal to ">="
console.log(3 >= 3); //true
console.log(3 >= 5); //false

//Less than or equal to '<+'
console.log(3 <= 3); //true
console.log(3 <= 0); //false

// EQUAL COMPARISONS
// Double Equals '=='
// Checks if the characters' face value for each of the two values are the same, but excludes its data type.
// For a False value to be returned, it must be different face/character values.
console.log(3 == 2); //false
console.log(3 == 3); //true
console.log(3 == "3"); //true
console.log(3 == "Three"); //false
console.log("Three" == "Three"); //true
console.log("Three" == "three"); //false

// Triple Equals (AKA Strict Equality) '==='
// Checks of the characters of the two values match. Also, it compares the data/primitive types to compare if they are the same as well.
// For a False value to be returned, they must either be different face/character values or different data types.
console.log(3 === 3); //true
console.log(3 === "3"); //false
console.log("Hello" === 'Hello'); //

// NOT EQUAL COMPARISONS
// Not Equal '!='
// ! is called a Bang in JavaScript
// Checks to see if characters (AKA face value of the two values are not equal to each other)
// For a True Value to be returned, it must be different face/character values
console.log(3 != 3); //false
console.log(3 != 2); //true
console.log("Hello" != "hello"); //true (Casing must be the same for this to return as false)
console.log(3 != "3"); //false
console.log(3 !== "3"); //true

// Strict Not Equal '!=='
// Checks to see if values are NOT equal to each other.
console.log(3 !== 3); //false
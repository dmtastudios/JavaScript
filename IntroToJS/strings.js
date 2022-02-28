// STRINGS (EVERYTHING BETWEEN SINGLE OR DOUBLE QUOTES)

// ONLY THE CONTENT INSIDE OF THE SINGE/DOUBLE QUOTES WILL BE IN THE TERMINAL
console.log("Dave, man..."); //Cool message here
console.log("Dave, man..."); //And, again here... 

// Examples of strings with single or double quotes inside of the string
console.log('Captain America says, "Remember to drink your Ovaltine."');

// Concatenation (adding two strongs together using a + sign)
console.log("Commonwealth" + "Coders");
console.log("Commonwealth "+"Coders"); //adding a space
console.log("Commonwealth" + " " + "Coders"); //another way to concatenate strings with a space

// Length Property (Returns the string length/number of characters and spaces in the string)
console.log("TARDIS".length); //6 characters in TARDIS
console.log("Time and Relative Dimension in Space".length); // 36

console.log("Hi".length+"Bye".length); // 5
// console.log(2+3);
// console.log(5);

// Index
// Each character or space in a string has a set index
/*
Syntax Example... 

String [Number] */
// Index starts at 0
console.log("Hello"[1]); // e
console.log("Goodbye"[0]); // b
console.log("Goodbye"[90]); // undefined, because it exceeds the number of letters in the word Goodbye




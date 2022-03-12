// CONDITIONAL STATEMENTS REVIEW
// Conditional statements are used to perform different actions based off of different conditions

// IF
// The IF statement executes/runs a block of code if a specified condition is true

console.log('====================================');
console.log(`IF EXAMPLES`);
console.log('====================================');

// Example 1
if (true) { // Condition was TRUE so the code executes/runs
  console.log(`Condition was TRUE`);
}

// Example 2
if (false) { // Condition was FALSE so the code does NOT execute/run
  console.log("Condition was FALSE");
}

// Example 3
if (2 > 0) { // Condition was TRUE so the code executes/runs
  console.log(`Hello`);
}

// ELSE
// The ELSE statement is used at the end of a conditional statement. Also, the ELSE statement executes/runs a block of code if the specified condition in the preceding IF statement and all preceding ELSE IF statements (If there are any) are false.

console.log('====================================');
console.log(`IF & ELSE EXAMPLE`);
console.log('====================================');

if (false) {
  console.log(`If statement was true`);
} else {
  console.log(`If statement was false`);
}

// ELSE IF
// The ELSE IF statement executes/runs a block of code if the specified condition is true and the specified condition in the preceding IF statement and all preceding ELSE IF statements (If there are any) are false.

console.log('====================================');
console.log(`IF, ELSE IF, & ELSE EXAMPLE`);
console.log('====================================');

if (false) {
  console.log(`IF WAS TRUE!!!`);
} else if (false) {
  console.log(`IF WAS FALSE & 1ST ELSE IF WAS TRUE!`);
} else if (false) {
  console.log(`IF WAS FALSE, 1ST ELSE IF WAS FALSE, & 2ND ELSE IF WAS TRUE!`);
} else {
  console.log(`IF WAS FALSE, 1ST ELSE IF WAS FALSE, & 2ND ELSE IF WAS FALSE!`);
}

// NESTED CONDITIONAL STATEMENTS
// A conditional statement can be nested inside another conditional statement

console.log('====================================');
console.log(`NESTED CONDITIONAL STATEMENT EXAMPLE`);
console.log('====================================');

if (true) {
  console.log(`IF WAS TRUE!`);

  // Nested Conditional Statement
  if (true) {
    console.log(`IF WAS TRUE & NESTED IF WAS TRUE!`);
  }

} else {
  console.log(`IF WAS FALSE!`);
}
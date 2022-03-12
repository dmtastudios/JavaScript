// 1a.Create a LET variable named randomNum.Use Math.random, as well as Math.floor, so the possible value for it will be a whole number from 1 to 5(Ex: 1, 2, 3, 4, or 5).
let randomNum = Math.random(1, 2, 3, 4, 5)
let randomNum = Math.floor()
console.log(randomNum);

// OR
let randomNum = Math.random();
randomNum += 5;
randomNum++;
console.log(randomNum);

// 1b.Using IF, ELSE IF, and ELSE, have the following display in the terminal / console for each case (AKA Each value for randomNum) "Greater than or equal to 4", "Equal to 2 or 3", "Equal to 1" in the terminal / console
if (randomNum >= 4) {
    console.log("Greater than or equal to 4");
} else if (randomNum === 3 || randomNum === 2) {
    console.log("Equal to 2 or 3");
} else {
    console.log("Equal to 1");
}

// 1c.Using a separate if statement(Not part of the one created above) have the following display "Not equal to 3" if the value for randomNum is NOT equal to 3.
if (randomNum !== 3) {
    console.log("Not equal to 3");
}

// 1d.Using another separate if statement(Not part of the ones created above) have the following display "NOT equal to 3 AND not equal to 5" if the value for randomNum is NOT equal to 3 and also NOT equal to 5(AKA If the value is 1, 2, or 4).
if (randomNum !== 3 && 5) {
    console.log("NOT equal to 3 AND not equal to 5");
}

// 1e.Using another separate if statement(Not part of the ones created above) have the following display "Equal to 2 OR equal to 4" if the value for randomNum is either 2 or 4.
if (randomNum === 2 || randomNum === 4) {
    console.log("Equal to 2 or equal to 4");
}
// BONUS
// 2. Use a ternary to display "Greater than or equal to 4" in the terminal / console if the value for randomNum is equal to or more than 4. Also, using the same ternary have "Less than 4" display in the terminal / console if the value is less than 4(NOTE: You will need to look up ternary since we have not covered it.)
console.log(randomNum);

// 3. Use a switch statement to display the number spelled out(Example: "One" for 1, "Two" for 2, etc.) in the terminal / console for each random value that randomNum can have(1, 2, 3, 4, or 5)(NOTE: You will need to look up switch statements since we have not covered it.)
switch (randomNum) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
}

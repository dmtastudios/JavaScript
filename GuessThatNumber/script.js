// GUESS THAT NUMBER
// Message to be used throughout the project/file
const enterNumText = `Please, enter a number greater than zero.`

// For restarting the game
let restartGame = true;

//For storing the range of the number to be guessed.
let rangeNum;

// For storing the number that the user will guess.
let randomNum;

// For storing the number of attempts the user has left.
let attempts;

// For storing the user's guess.
let guess;

// For storing the user's response to play again or not.
let playAgain;

// Starting Alert message
alert(`Welcome to the Jungle, Baby! Click, like, OK or something to like start the game or something...`);

// Game restarts as long as restart game has value of true.
while (restartGame) {
    // Asks user to enter a number to set the upper limit for the random number that will be created.
    rangeNum = prompt(`Please, enter a maximum number for the range.`);

    // Using parseInt to attempt to convert the user's response to a number value.
    rangeNum = parseInt(rangeNum);

    // Verifies the user's entry for a range number is greater than zero.
    while (!rangeNum || rangeNum < 1) {
        rangeNum = prompt(enterNumText);
        rangeNum = parseInt(rangeNum);
    }

    // Create a random number using the range number entered by the user.
    randomNum = Math.floor(Math.random() * rangeNum)
        + 1;

    // Prompt user to enter a number of attempts allowed.
    attempts = parseInt(prompt(`Please, enter a number of attempts allowed.`));

    // Verifies the user's entry for a number of attempts allowed is a number greater than the range they set.
    while (!attempts || attempts < 1 || attempts > rangeNum) {
        attempts = parseInt(prompt(`Please, enter a number from 1 to ${rangeNum}`));
    }

    // Asks user to enter a guess in the range they set.
    guess = prompt(`Please, enter a guess from 1-${rangeNum}. You have ${attempts} attempt(s) left.`);

    // Continues looping until the user guesses the correct number or runs our of attempts.
    while (true) {
        // Displays the number when a code word is entered
        if (guess === `Muggles`) {
            alert(`The number is ${randomNum}`);
            guess = prompt(`Please, enter a gess from 1 to ${rangeNum}. You have ${attempts} attempts(s) left.`);

            // Tries to convert the user's guess into a number
            guess = parseInt(guess);

            // Verifies the user's guess is a number greater than zero and less than or equal to the range they set.
            while (!guess || guess < 1 || guess > rangeNum) {
                guess = parseInt(prompt(`Please, enter a number from 1 to ${rangeNum}`))
            };

        }
        // Removes an attempt
        attempts--;

        // Checks if user guessed correctly. If so, then the game ends.
        if (guess === randomNum) {
            alert(`CONGRATULATIONS!!! YOU WIN AN OVEN MITT!!!!${randomNum}`)
            break;

            // Checks if user has any attempts left. If not, then the game is over and the number is displayed to the user.

        } else if (attempts === 0) {
            alert(`Sorry, but you have run out of attempts (Psst.... The number was ${randomNum})`);

            // Checks if user's guess was too low and prompts the user to guess again, ipso facto, per se, quid pro quo...

        } else if (guess < randomNum) {
            guess = prompt(`Too low. You have ${attempts} attempt(s) left.`)

            // the only other possibility is the user's guess was too high, so the user is prompted again.

        } else {
            guess = prompt(`Too high. You have ${attempts} attempt(s) left.`);
        }
    }
}

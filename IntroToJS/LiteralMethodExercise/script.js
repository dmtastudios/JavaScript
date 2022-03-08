// Literal Math Method Exercise
// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs."

// 1b
console.log(warmHugs.toUpperCase());

// 1c
// console.log(warmHugs.replace("like","love"));

warmHugs = warmHugs.replace("like", "love" );
console.log(warmHugs);

// 2a
let beenImpaled = "Oh, look at that. I've been impaled.";

// 2b
// beenImpaled = beenImpaled.slice(18,36);
beenImpaled = beenImpaled.slice(-18);
console.log(beenImpaled);

// 3a
let dotDotDot = "...";

// 3b
let skullBones = `I don't have a skull ${dotDotDot} or bones`
console.log(skullBones);

// 4
console.log(Math.PI);

// 5
let randomNumber = Math.random();
randomNumber *= 3;
randomNumber = Math.floor(randomNumber)
randomNumber ++;
console.log(randomNumber);

// BONUS
// 6
console.log(" Let it go!".toUpperCase().repeat(3).slice(-21));
console.log(" Let it go!".toUpperCase().repeat(5).trim());

// 7a
let reinDeers = "Reindeers are better than people.";

// 7b
console.log(reinDeers.replace("Reindeers are better than people.","Reindeers_are_better_than_people."));
console.log(reinDeers.replace(/ /g, '_'));
console.log(reinDeers.replaceAll(' ', '_'));

// 8
let squareRoot = Math.sqrt(2000);
console.log(squareRoot);

// 9
let newRandomNumber = Math.ceil((Math.random()*17)+6);
console.log(newRandomNumber);

let newRandomNumber1 = (Math.floor((Math.random()*17)+7));
console.log(newRandomNumber1);

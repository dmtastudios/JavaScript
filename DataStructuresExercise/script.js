// 1a
const jedi = [
    `LUKE`,
    `THAT OTHER DUDE`,
];
// 1b

// 1c

// 1d
jedi.unshift('Yoda');
console.log(jedi);

// 1e
console.log(jedi[1]);

// 1f
const force = jedi.pop();
console.log(jedi);

// 1g
jedi.shift();
console.log(jedi);

const dark = jedi.shift();
console.log(jedi);

// 2a
const sithlords = [
    'Darth Vader',
    'Darth Sidious',
    'Darth Maul'
];

// 2b
const imperialOfficers = [
    'Grand Moff Tarkin',
    'Orson Kremnic'
];

// 2a
// const starWarsVillains = sithLords.concat(imperialOfficers);
// console.log(starWarsVillains);


// 2c
// console.log(starWarsVillains.slice(0, 2));


// 2d
const droids = {
    astromech: `R2D2`,
    protocol: `c-3PO`,
    assassin: `IG-88`
};

// 3b
console.log(droids[`astromech`]);

// 3c
console.log(droids.protocol);

// 3d
droids[`assassin`] = `IG-11`;
console.log(droids);

droids.assassin = `IG-11`
console.log(droids.assassin);
console.log(droids);

// BONUS
// 4
console.log(starWarsVillains[0][6]);

// 5
console.log(sithLords.slice(-2, -1));

// 6
const starWarsMovies = [
    {
        episodeOne: `Episode 1`,
        episodeTwo: `Episode 2`,
        episodeThree: `Episode 3`,
    }
];
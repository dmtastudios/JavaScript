// Spread spreads or copies the contents of one array or object into another of one of them



/*
SYNTAX EXAMPLE
... DATA STRUCTURE
*/


// SPREAD WITH ARRAYS
// SPREADS or copies contents of the nums1 and nums2 array into the allNums array
// EXAMPLE 1
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
// const allNums = [1, 2, 3, 4, 5, 6]
const allNums = [...nums1, ...nums2];
console.log(allNums);

// EXAMPLE 2
// Spreads or copies the contents of the places array into the places and More array. Also adding tw more values/items.
const places = ['Home', 'Work', 'Store'];
const placesAndMore = [...places, 'Chruch', 'Movie Theater',];
console.log(placesAndMore);

// EXAMPLE 3
const me = ['Me'];
const meAndSugar = ['Sugar', ...me];
console.log(meAndSugar);
const theFam = [
    'Lily',
    ...meAndSugar,
    'Scratch'
];
console.log(theFam);

// EXAMPLE 4
// const vGames = [`Elder Ring`, `WoW`, `MANZU_2918`];
// const VTopGames = ['GTA5', 'Also GTA5'];
// const sports = ['Cycling', 'Soccer', 'Fencing'];
// const books = ['Lord of the Rings', 'Wheel of Time', 'Harry Potter']
// const allEntertainment = [
//     ...vGames,
//     ...VTopGames,
//     ...sports,
//     ...books
// ];
// console.log(allEntertainment);

const chicagoTeams1 = {
    football: `Da Bears`,
    hockey: `Blackhawks`
};
const chicagoTeams2 = {
    basketball: `Bulls`
}
const chicagoTeams = {
    ...chicagoTeams1,
    ...chicagoTeams2
};
console.log(chicagoTeams);

const baseballTeams1 = {
    chicago: `White Sox`,
    sanDiego: `Padres`,
    boston: `Red Sox`
};
const baseballTeams2 = {
    chicago: `Cubs`,
    boston: `Rays`
};
const baseballTeams = {
    ...baseballTeams1,
    ...baseballTeams2
};
// console.log(baseballTeams);

// EXAMPLE 3
const spiderman = { spidermanOne: `Toby McGuire` };
const spidermen = {
    ...spiderman,
    spidermanTwo: `Andrew Garfield`
};
console.log(spidermen);
const allSpidermen = {
    spidermanThree: `Tom Holland`,
    ...spidermen
};
console.log(allSpidermen);
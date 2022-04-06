// 1a
const jPDinos = [
    "Velociraptors",
    "T-Rex",
    "Dilophaurus",
]

// 1b
function seeDinos(i, ...j) {
    console.log(i);
    console.log(j);
};

seeDinos(...jPDinos);

console.log(`=`.repeat(25));

// 2a
const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcom: "Jeff Goldblum",
};

// 2b
seeCharacters = ({ ellieSattler }) => {
    console.log(ellieSattler);
}
seeCharacters(jPCharacters);

console.log(`=`.repeat(25));

// BONUS
// 3a


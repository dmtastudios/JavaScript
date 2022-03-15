const darkKnightActors = {
    batman: `Christian Bale`,
    alfred: `Michael Caine`,
    gordon: `Gary Oldman`
};
console.log(darkKnightActors);
const { alfred, batman, gordon } = darkKnightActors;
console.log(batman);
console.log(alfred);
console.log(gordon);

const {
    batman: bruceWayne, alfred: alfredPennyworth, gordon: jamesGordon
} = darkKnightActors;
let readlineSync = require("readline-sync");

// ## Exercise 7
// Beachwalk Hotel 🏖 <br />
// Let's calculate how much a hotel stay costs at the fantastic Beachwalk Hotel

console.log("Hello! Welcome to Beachwalk Hotel 🏖");

// ### 7.1
// The price for night is `90€`<br />
// Ask the user for how many nights he would like to stay and print the total cost.

console.log("How many nights would you like to stay with us?");

let lengthStay = readlineSync.question("> ");
let baseRate = lengthStay * 90;

console.log("That amounts to " + baseRate + " €" );
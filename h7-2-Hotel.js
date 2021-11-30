let readlineSync = require("readline-sync");

// ### 7.2
// Breakfast is an extra `10€`<br />
// Continue from the last exercise and ask the user if he would like to include breakfast.<br />
// Print the total cost.

console.log("Hello! Welcome to Beachwalk Hotel 🏖");
console.log("How many nights would you like to stay with us?");

let lengthStay = readlineSync.question("> ");
let baseRate = lengthStay * 90;

console.log("Would you like to include breakfast? Y/N");
let breakfast = readlineSync.question("> ");
    
if (breakfast === "Y") {
    let brincl = baseRate + 10;
    console.log(" Your total amounts to " + brincl + "€, including breakfast");

}   else if (breakfast === "N") {
        let brincl = baseRate;
        console.log (" Your total remains " + brincl + "€")
    }
let readlineSync = require("readline-sync");

// ## Exercise 3
// ### Currency converter
// Write a program that asks the user for an amount in USD.<br />
// Output that amount converted to EURO.

// > **Bonus goal:**<br />
// > Use a precision of 2 decimal points: `3.45€`.

console.log("Please enter any amount in dollars");
let amountUSD = readlineSync.question(">USD ");

amountUSD = Math.round(amountUSD); 

// rounds average
// OR
// Math.ceil(x) rounds up
// Math.floor(x) rounds down
// variable.toFixed(2)

// --- returns a number
// x=parseFloat(x)
// x=Number(x)

console.log(">EUR " + amountUSD * 0.89);

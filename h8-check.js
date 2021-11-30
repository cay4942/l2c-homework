let readlineSync = require("readline-sync");

// Write a program that check wether a number exists inside an array of numbers
// let n = 5;
// let numbers = [4, 7, 10, 12, 1, 8, 20];
// // for this case the result would be false

console.log("Please enter a number");
let n = readlineSync.question("> ");

let numbers = [4, 7, 10, 12, 1, 8, 20];

let counter = 0;
for (let i = 0; i < numbers.length; i++) {
    
    if (numbers[i] == n) {
        counter++;
    }
}
console.log("The number " + n +  " shows up " + counter + " times!" );

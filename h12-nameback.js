let readlineSync = require("readline-sync");

// Exercise 12

//Write a program that asks the user for a name and outputs that name backwards.

console.log("Please type a name of your choice");
let answer = readlineSync.question("> ");


function reverseString(str) {
    var newString = "";
    for (i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
}
console.log(answer + " reversed is " + reverseString(answer));


let readlineSync = require("readline-sync");

// ## Exercise 6
// Modify Exercise 4 so that the program asks the user for a number `n` 
// and gives them the possibility to choose between computing the sum or 
// computing the product of 1 to n.

console.log("Please enter a number");
let n = readlineSync.question("> ");

console.log("Would you like a SUM or a PRODUCT")
let answer = readlineSync.question("> ");

if (answer === "SUM") {
    
    var sum = 0;

    for (var i = 1; i <= n; i ++) {

       sum += i;

       console.log( i + " + " )}

    console.log(" = " + sum)}
    

else if (answer === "PRODUCT") {
    
    var product = 1;

    for (var i = 1; i <= n; i ++) {
        
        product = product * i;
       console.log( i + " x ");
       
    }

    console.log(" = " + product)} 


// another way to show up the results horizontally 
// let stringResult = stringResult + "test"
// console 
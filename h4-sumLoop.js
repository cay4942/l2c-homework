let readlineSync = require("readline-sync");

// ## Exercise 4
// ### Sum loop
// Write a program that asks the user for a number `n` and prints the sum of the numbers `1` to `n`.

// > **Example:**<br />
// > User inputs `5`<br />
// > Output:<br />
// > `1 + 2 + 3 + 4 + 5 = 15`

//math.pow(n,exp) = n**2 = n*n)

console.log("Please enter a number");
let n = readlineSync.question("> ");

let total = 0;

  for (i = 1; i <= n; i ++){
           
       total += i;                           //counter = counter +1 is equal to counter ++ is qual to counter +=
       console.log( i + " + ");
     // if (i >1 ) {
     //      stringResult = stringResult + "+" + i;
     // } else {
     //      stringResult = stringResult + i;
     // }
 console.log(" = " + total);

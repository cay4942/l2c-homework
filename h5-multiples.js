let readlineSync = require("readline-sync");

// ## Exercise 5
// Modify the Exercise 4 so that only multiples of three or five are considered in the sum.

// > **Example:**<br />
// > User inputs `17`<br />
// > Output:<br />
// > `3 + 5 + 6 + 9 + 10 + 12 + 15 = 60`

console.log("Please enter a number");
let n = readlineSync.question("> ");

var total = 0;

  for (var i = 1; i <= n; i ++) {
      if ( i % 3 === 0 || i % 5 === 0) {
       total += i;

       console.log( i + " + ");
        }
    }
console.log(" = " + total);
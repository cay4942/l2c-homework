let readlineSync = require("readline-sync");

// ## Exercise 1
// ### Input and output
// Write a program that ask the user for his name and prints a greeting.
// ```
// Please enter your name:
// Hello <NAME>, welcome to the Learn to Code course.
// ```

// > **Hint:**<br />
// > Use `readline-sync` for the input and `console.log()` for the output .

console.log("Please enter your name");
let firstName = readlineSync.question("> ");

console.log("Hello " + firstName + ", welcome to the Learn to Code course.");
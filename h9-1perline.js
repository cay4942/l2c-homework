
// Write a program that prints 1 per line only the names on odd positions in an array of names.

let a = ["John", "Hannah", "Maria", "Joseph", "Jules", "Ina", "Morgan", "Ted"];

let counter = 0;
for (i = 1; i < a.length; i++) {
    if (i % 2 != 0) {
        counter++;
        console.log(i + " : " + a[i - 1]);
    }
}   


// Write a program that calculates the sum, the average, the highest and the lowest numbers from an array.

//     Example:
//     Array: [4, 7, 10, 12, 1, 8, 20, 16]
//     Output:

// Sum: 78
// Average: 9.75
// Highest: 20
// Lowest: 1

let a = [ 5, 10, 4, 1, 18, 13, 2];

let numbers = 0;

let highest = a[0];
let lowest = a[0];

for (var i = 1; i < a.length; i ++) {
   numbers += a[i];

      if ( a[i] > highest) {
         highest = a[i];
      }

      if ( a[i] < lowest) {
         lowest = a[i];
      }
}

 let sum = numbers;
 console.log(sum);
 let average = sum / a.length;

 console.log(average);
 console.log(highest);
 console.log(lowest);
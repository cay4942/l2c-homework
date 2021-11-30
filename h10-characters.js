// Write a program that prints the name with more characters in an array of names.

let arr = ["John", "Anna", "Maria", "Joseph", "Jules", "Ina", "Morgan", "Ted"];

  let counter = 0;
  var longest;
  
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > counter) {
        counter = arr[i].length;
        longest = arr[i];
    }
  }
  console.log(longest);

/* 70. Rotate Elements Left in Array (Length 3)

Write a JavaScript program to rotate the elements left in a given array of integers of length 3.  */

let myArray = [1, 2, 3];
let newArray = [];

for (let i = 2; i >= 0; i--) {
  newArray.push(myArray[i]);
}

console.log(newArray);
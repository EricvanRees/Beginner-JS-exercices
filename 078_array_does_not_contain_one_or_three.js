/*78. Check if Array Does Not Contain 1 or 3

Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.

*/

function noOneOrThree(arr) {
  if (arr.length === 2 && arr.every((el) => Number.isInteger(el) === true)) {
    if (arr.includes(1) || arr.includes(3)) {
      return "does contain one or three";
    } else {
      return "does not contain one or three";
    }
  }
}

console.log(noOneOrThree([1, 8]));
console.log(noOneOrThree([1, 2]));
console.log(noOneOrThree([2,4]));
console.log(noOneOrThree([9,4]));
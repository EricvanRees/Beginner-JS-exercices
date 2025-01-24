/* 77. Check if Array Contains 1 or 3

Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3. 
 */

function findOneOrThree(arr) {
  if (arr.length >= 1 && arr.every((el) => Number.isInteger(el) === true)) {
    if (arr.includes(1) || arr.includes(3)) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(findOneOrThree([1,4]));
console.log(findOneOrThree([3,4]));
console.log(findOneOrThree([2,4]));
console.log(findOneOrThree([9,4]));
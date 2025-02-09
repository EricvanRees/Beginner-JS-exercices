/* 71. Check if 1 is First/Last Element in Array

Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.  */ 

function checkArray(myArray) {
  if (myArray.length < 1) {
    return false;
  } else if (myArray[0] === 1) {
    return true;
  } else if (myArray[myArray.length - 1] === 1) {
    return true;
  } else {
    return false;
  }
}

console.log(checkArray([1]));
console.log(checkArray([1, 0, 0, 0]));
console.log(checkArray([0, 0, 1]));
console.log(checkArray([10, 20, 30]));
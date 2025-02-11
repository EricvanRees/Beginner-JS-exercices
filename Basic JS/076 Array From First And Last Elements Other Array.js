/* 76. Create Array with First/Last Elements from Array

Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.   */

function firstLast(arr) {
  let newArr = [];
  if (arr.length >= 1 && arr.every((el) => Number.isInteger(el) === true)) {
    newArr.push(arr[0]);
    newArr.push(arr[arr.length -1]);
  } else {
    return false;
  }
  return newArr;
}

console.log(firstLast([1,2,3,4,5]));

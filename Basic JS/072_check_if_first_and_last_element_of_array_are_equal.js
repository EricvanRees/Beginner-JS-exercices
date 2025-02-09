/* 72. Check if First and Last Elements Are Same

Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.  
 */
function arrayCheck(myArr) {
  if (myArr.length === 3 && myArr[0] === myArr[myArr.length - 1]) {
    return true;
  } else {
    return false;
  }
}

console.log(arrayCheck([1,2,3]));
console.log(arrayCheck([3,2,3]));
console.log(arrayCheck([1,2,3,4]));
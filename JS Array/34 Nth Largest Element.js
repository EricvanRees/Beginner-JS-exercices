/* 
Write a JavaScript function to get the nth largest element from an unsorted array.

Test Data :

console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
89
*/

let myArr = [43, 56, 23, 89, 88, 90, 99, 652];

function getNthLargest(anArr, anInt) {
  const sortedArr = myArr.sort(function(a, b){return a-b});
  return sortedArr.slice([sortedArr.length - anInt], [sortedArr.length - anInt + 1]);
}

console.log(getNthLargest(myArr, 4));
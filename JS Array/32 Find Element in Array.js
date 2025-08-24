/* 
Write a JavaScript function to find an array containing a specific element.

Test data :

arr = [2, 5, 9, 6];
console.log(contains(arr, 5));
[True]
*/

function contains(anArr, item) {
  return anArr.includes(item);
}

console.log(contains([2, 5, 9, 6], 5));
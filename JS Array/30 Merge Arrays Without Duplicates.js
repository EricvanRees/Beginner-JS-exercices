/*
Write a JavaScript function that merges two arrays and removes all duplicate elements.

Test data :

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];

console.log(merge_array(array1, array2));
[3, 2, 30, 1]
*/

function mergeArrs(arr1, arr2) {
  const mergedArray = [...arr1, ...arr2];
  const newSet = new Set(mergedArray);
  return Array.from(newSet);
}

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(mergeArrs(array1, array2)); // [1, 2, 3, 30]
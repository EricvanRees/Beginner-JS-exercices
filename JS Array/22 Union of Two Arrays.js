/* 
Write a JavaScript program to compute the union of two arrays.

Sample Data :

console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100]
*/

function unionOfArrays(arr1, arr2) {
  const mySet = new Set([...arr1, ...arr2])
  return Array.from(mySet)
}

console.log(unionOfArrays([1, 2, 3], [100, 2, 1, 10]));
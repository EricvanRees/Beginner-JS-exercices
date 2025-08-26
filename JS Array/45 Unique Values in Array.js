/* 
Write a JavaScript program to find all the unique values in a set of numbers.

Test Data :

[1, 2, 2, 3, 4, 4, 5]
[1, 2, 3, 4, 5]
[1, -2, -2, 3, 4, -5, -6, -5]

Expected Output:

[1,2,3,4,5]
[1,2,3,4,5]
[1,-2,3,4,-5,-6]
*/

function uniqueVals(anArr) {
  const unique = new Set(anArr);
  return Array.from(unique);
}

console.log(uniqueVals([1, 2, 2, 3, 4, 4, 5]));
console.log(uniqueVals([1, 2, 3, 4, 5]));
console.log(uniqueVals([1,-2,3,4,-5,-6]));
/*
Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
*/

function uniqueVals(anArr) {
  const uniqueVals = new Set(anArr);
  return uniqueVals
}

console.log(uniqueVals([1,1,1,2,2,2,3,3,3]));
console.log(uniqueVals(["a", "a", "b", "b"]));
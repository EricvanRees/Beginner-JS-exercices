/* 2. Write a JavaScript function to clone an array. */

let array_Clone = function(arra1) {
  // Create a shallow copy of the input array with the slice method 
  return arra1.slice(0);
};

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
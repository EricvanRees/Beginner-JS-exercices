/* 
Write a JavaScript function to cast the square root of a number to an integer.
Test Data :
console.log(sqrt_to_int(17));
4
*/

function sqrt_to_int(anum) {
  return Math.floor(Math.sqrt(anum));
}

console.log(sqrt_to_int(17));
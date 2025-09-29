/*  
Write a JavaScript function to create a specified number of elements with a pre-filled numeric value array.

Test Data :

console.log(array_filled(6, 0));
[0, 0, 0, 0, 0, 0]

console.log(array_filled(4, 11));
[11, 11, 11, 11]
*/

function fillArray(arrLength, fillVal) {
 
  return Array(arrLength).fill(fillVal);
}

console.log(fillArray(6, 0)); // [0, 0, 0, 0, 0, 0]
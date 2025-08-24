/* 
Write a JavaScript function to create a specified number of elements with a pre-filled string value array.

Test Data :

console.log(array_filled(3, 'default value'));
["default value", "default value", "default value"]
*/

function fillArray(arrLength, fillStr) {
 
  return Array(arrLength).fill(fillStr);
}

console.log(fillArray(3, 'default value'));
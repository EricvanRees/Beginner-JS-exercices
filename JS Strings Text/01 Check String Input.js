/* 1. Check String Input

Write a JavaScript function to check whether an 'input' is a string or not.
Test Data :
console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false */

function checkStr(aStr) {
  return typeof(aStr) === 'string'? true : false;
}

console.log(checkStr('w3resource'));
console.log(checkStr([1, 2, 3, 4]));
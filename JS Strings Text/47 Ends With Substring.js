/* 
Write a JavaScript function to test whether a string ends with a specified string.

Test Data :

console.log(endsWith('JS string exercises', 'exercises'));
true
*/

function endsWith(astr, substr) {
  return astr.endsWith(substr)? true : false;
}

console.log(endsWith('JS string exercises', 'exercises'));


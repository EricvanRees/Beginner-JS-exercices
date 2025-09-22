/* 
Write a JavaScript function to test whether a string starts with a specified string.

Test Data :

console.log(startsWith('js string exercises', 'js'));
true
*/

function startsWith(astr, substr) {
  return astr.startsWith(substr)? true : false;
}

console.log(startsWith('js string exercises', 'js'));
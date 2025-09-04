/* 
Write a JavaScript function to test whether the character at the given (character) index is lower case.

Test Data :

console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
true
*/

function isLowerCaseAt(astr, pos) {
  let char = astr.charAt(pos);
  return char === char.toLowerCase() ? true : false;
}

console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
/* 
Write a JavaScript function to test whether the character at the index provided is upper case.

Test Data :

console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
false
*/

function isUpperCaseAt(astr, anum) {
  return astr.charAt(anum) === astr.charAt(anum).toUpperCase()? true : false;
}

console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
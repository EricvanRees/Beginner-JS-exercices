/* 8. Capitalize First Letter

Write a JavaScript function to capitalize the first letter of a string.
Test Data :
console.log(capitalize('js string exercises'));
"Js string exercises" */

function capitalize(aStr) {
  if (typeof(aStr) === 'string') {
    return aStr.toUpperCase().slice(0, 1) + aStr.slice(1);
  }
  else {
    return false;
  }
}

console.log(capitalize('js string exercises'));
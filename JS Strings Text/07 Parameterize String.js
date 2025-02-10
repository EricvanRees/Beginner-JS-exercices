/* 7. Parameterize String

Write a JavaScript function to parameterize a string.
Test Data :
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa" */

function string_parameterize(aStr) {
  if (typeof(aStr) === 'string') {
    return aStr.toLowerCase().split(" ").join("-");
  }
  else {
    return false;
  }
}

console.log(string_parameterize("Robin Singh from USA."));
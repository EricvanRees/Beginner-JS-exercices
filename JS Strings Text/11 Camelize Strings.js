/* 11. Camelize String

Write a JavaScript function to convert a string into camel case.
Test Data :
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
"JavaScriptExercises"
"JavaScriptExercises"
"JavaScriptExercises" */

function camelize(aStr) {
  let newSubStr = '';
  let newStr = '';
  let newArr = [];
  newArr = aStr.split(" ");
  for (let i = 0; i <= newArr.length - 1; i++) {
    newSubStr = newArr[i][0].toUpperCase() + newArr[i].slice(1);
    newStr += newSubStr;
  }
  return newStr;
}

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
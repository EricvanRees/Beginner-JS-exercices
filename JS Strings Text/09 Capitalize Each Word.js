/* 9. Capitalize Each Word

Write a JavaScript function to capitalize the first letter of each word in a string.
Test Data :
console.log(capitalize_Words('js string exercises'));
"Js String Exercises" */

function capitalize_Words(aStr) {
  let newArr = [];
  let newStr = ''
  if (typeof(aStr) === 'string') {
    newArr = aStr.split(" ");
    for (let i = 0; i <= newArr.length - 1; i++) {
      newStr += newArr[i][0].toUpperCase() + newArr[i].slice(1) + ' ';
    }
  }
  return newStr.trim();
}

console.log(capitalize_Words('js string exercises'));
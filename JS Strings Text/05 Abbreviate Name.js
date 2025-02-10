/* 5. Abbreviate Name

Write a JavaScript function to convert a string into abbreviated form.
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S." */

function abbrev_name(aStr) {
  let newStr = ''
  let newArr =  aStr.split(" ");
  newStr = newArr[0] + " " + newArr[1].slice(0, 1) + ".";
  return newStr;
}

console.log(abbrev_name("Robin Singh"));
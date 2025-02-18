/* 5. Validate Number

Write a JavaScript function to validate whether a given value is a number or not. */

function isNumber(astr) {
  return Number.isInteger(astr)? true : false;
}

console.log(isNumber(9));
console.log(isNumber("a"));
console.log(isNumber(-9));
console.log(isNumber(undefined));
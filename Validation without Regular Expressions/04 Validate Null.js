/* 4. Validate Null

Write a JavaScript function to validate whether a given value type is null or not. */

function validateNull(astr) {
  return Object.is(astr, null)? true : false;
  //return astr === null? true : false;
}

console.log(validateNull(null));
console.log(validateNull("username"));
console.log(validateNull(undefined));

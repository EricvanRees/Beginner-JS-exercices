/* 3. Validate NaN

Write a JavaScript function to validate whether a given value type is NaN or not. */

function isNaN(anyval) {
  if (Number.isNaN(anyval) === true) {
    return true;
  }
  else {
    return false;
  }
}

console.log(isNaN(NaN));
/* 4. Extract Characters

Write a JavaScript function to extract a specified number of characters from a string.
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi" */

function truncate_string(aStr, aNum) {
  if (typeof(aStr) === 'string') {
    if (Number.isInteger(aNum)) {
      if (aNum >= 1) {
        return aStr.slice(0, aNum)
      } else {
        return false;
      }
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}

console.log(truncate_string("Robin Singh", 0));
/* 2. Check Blank String

Write a JavaScript function to check whether a string is blank or not.
Test Data :
console.log(is_Blank(''));
console.log(is_Blank('abc'));
true
false */

function blankOrNot(aStr) {
  if (typeof(aStr) === 'string') {
    if (aStr) {
      return true;
    } else {
      return false;
    }
  }
  else {
    return false;
  }
}

console.log(blankOrNot(''));
console.log(blankOrNot('abc'));
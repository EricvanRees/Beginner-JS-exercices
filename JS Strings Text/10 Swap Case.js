/* 10. Swap Case

Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
Test Data :
console.log(swapcase('AaBbc'));
"aAbBC" */

function swapcase(aStr) {
  let newStr = '';
  let newChar = '';
  if (typeof(aStr) === 'string') {
    for (let i = 0; i <= aStr.length - 1; i++) {
      if (aStr[i] === aStr[i].toUpperCase()) {
        newChar = aStr[i].toLowerCase();
        newStr += newChar;
      }
      else {
        newChar = aStr[i].toUpperCase();
        newStr += newChar;
      }
    }
  }
  else {
    return false;
  }
  return newStr;
}

console.log(swapcase('AaBbc'));


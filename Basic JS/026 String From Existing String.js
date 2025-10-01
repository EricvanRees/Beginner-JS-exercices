/* 26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more. */

function strThree(aString) {
  if (typeof(aString) === 'string' && aString.length >= 3) {
    let lastThree = aString.slice(-3);
    let newStr = lastThree + aString + lastThree;
    return newStr;
  }
  else {
    return false;
  }
}

console.log(strThree('week')); // logs "eekweekeek" (=  "eek" + week" + "eek")

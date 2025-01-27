/* 30. Write a JavaScript program to check whether a string " Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one. */

function checkScript(aString) {
  if (typeof(aString) === 'string') {
    return (aString.substring(4, 10) == 'Script')? true : false;
  }
  else {
    return false;
  }
}

console.log(checkScript('JavaScript'));
console.log(checkScript('cafe con leche'));
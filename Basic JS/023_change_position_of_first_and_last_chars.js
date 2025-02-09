/* 23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1. */

function rewriteStr(aString) {
  if (typeof(aString) === 'string') {
    let lastChar = aString[aString.length - 1];
    let firstChar = aString.charAt(0);
    let newStr = lastChar + aString.slice(1, -1) + firstChar;
    return newStr;
  }
  else {
    return false;
  }
}

console.log(rewriteStr('vino tinto'));
console.log(rewriteStr('cafe con leche'));
/* 24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back. */

function addChars(aString) {
  if (typeof(aString) === 'string') {
    let newStr = aString.charAt(0) + aString + aString.charAt(0);
    return newStr;
  }
  else {
    return false;
  }
}

console.log(addChars('vino tinto'));
console.log(addChars('cafe con leche'));

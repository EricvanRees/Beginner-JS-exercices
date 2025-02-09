/* 37. Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case. */ 

function convertString(aString) {
  if (typeof(aString) === 'string') {
    if (aString.length < 3) {
      return aString.toUpperCase();
    } else {
    aString = aString.slice(0, 3);
      return aString.toUpperCase();
    }
  }
  else {
    return false;
  }
}

console.log(convertString("pepeek"));
console.log(convertString("ee"));
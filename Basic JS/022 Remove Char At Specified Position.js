/* 22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string. */

function removeChar(aString, aNumber) {
  if (typeof(aString) === 'string' && Number.isInteger(aNumber)) {
    return aString.substring(0, aNumber) + aString.substring(aNumber + 1);
  }
  else {
    return false;
  }
}

console.log(removeChar("havermelk", 1)); // logs "hvermelk"
console.log(removeChar("week", 2)); // logs "wek"

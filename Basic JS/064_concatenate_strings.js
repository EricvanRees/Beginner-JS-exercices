/* 64. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.  
 */

let aString = "Er";
let bString = "van";
let newStr = '';

function concat(aStr, bStr) {
  if (aString.length === bStr.length) {
    newStr = aStr.concat(bStr);
  } else if (aStr.length > bStr.length) {
    newStr = aStr.slice(0, bStr.length).concat(bStr);
  } else if (bStr.length > aStr.length) {
    newStr = aStr.concat(bStr.slice(0, aStr.length));
  }
  return newStr;
}

console.log(concat(aString, bString));

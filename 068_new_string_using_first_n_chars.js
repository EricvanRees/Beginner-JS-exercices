/* 68. Use First and Last 'n' Characters from String

Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n.  
 */

function lastN(aString, aNum) {
  if (aString.length >= aNum) {
    return aString.slice(0, aNum) + aString.slice(-aNum);
  }
  else {
    return false;
  } 
}

console.log(lastN("woordenboek", 3));
console.log(lastN("soep", 1));
console.log(lastN("pizza", 2));
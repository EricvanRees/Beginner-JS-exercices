/* 67. Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.  
 */

function removeP(aStr) {
  if (aStr.slice(0, 1) === 'P' || (aStr.slice(-1) === 'P')) {
    return aStr.slice(1, -1);
  } else {
    return aStr;
  }
}

console.log(removeP("Polopos"));
console.log(removeP("RockGrouP"));
console.log(removeP("Granada"));

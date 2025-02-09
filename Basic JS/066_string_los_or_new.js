/* 66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.  
 */

function cityCheck(aStr) {
  if (aStr.slice(0, 3) === "Los" || aStr.slice(0, 3) === 'New') {
    return aStr;
  } else {
    return '';
  }
}

console.log(cityCheck("New York"));
console.log(cityCheck("Los Angeles"));
console.log(cityCheck("Granada"));
console.log(cityCheck("Nevada"));

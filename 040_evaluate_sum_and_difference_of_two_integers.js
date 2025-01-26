/* 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.   */

function checkSum(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    if (a === 8 || b === 8) {
      return true;
    } else if (a + b === 8) {
      return true;
    } else if (a - b === 8) {
      return true;
    } else {
      return false;
    }
  } 
  else {
    return false;
  }
}

console.log(checkSum(4, 4)); // true
console.log(checkSum(8, 8)); // true
console.log(checkSum(17, 9)); // true
console.log(checkSum(88, 1)); // false
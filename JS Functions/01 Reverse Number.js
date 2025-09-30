/* 1. Reverse Number

Write a JavaScript function that reverses a number.
Example x = 32243;
Expected Output : 34223 */

function reverseNumber(aNum) {
  let reverseNumber = '';
  // check if number is integer
  if (Number.isInteger(aNum)) {
    // convert number to string
    let newStr = aNum.toString();
    // split string into individual chars
    let strSplit = newStr.split('');
    // reverse loop
    for (i = strSplit.length - 1; i >= 0; i--) {
      reverseNumber += strSplit[i];
    }
  }
  else {
    return false;
  }
  return parseInt(reverseNumber);
} 

  // written as arrow function:
const reverseNum = aNum => {
  let reverseNumber = '';
  // check if number is integer
  if (Number.isInteger(aNum)) {
    // convert number to string
    let newStr = aNum.toString();
    // split string into individual chars
    let strSplit = newStr.split('');
    // reverse loop
    for (i = strSplit.length - 1; i >= 0; i--) {
      reverseNumber += strSplit[i];
    }
  }
  else {
    return false;
  }
  return parseInt(reverseNumber);
}

console.log(reverseNum(6789)); // logs 9876
console.log(reverseNumber(6789)); // logs 9876
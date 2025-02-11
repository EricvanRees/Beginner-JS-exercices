/* 47. Write a JavaScript program to check whether a given number exists in the range 40..10000.  
For example 40 presents in 40 and 4000
 */

function check1(num, min=40, max=10000) {
  if (Number.isInteger(num)) {
    if (num >= min && num <= max) {
      return true;
    } else {
      return false;
    }
  }
  else {
    return false;
  }
}

console.log(check1(40));
console.log(check1(41));
console.log(check1(10000));
console.log(check1(10001));

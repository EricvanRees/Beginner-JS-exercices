/* 33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.  */

function checkIncl(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return ((a >= 40 && a <= 60) && (b >= 70 && b <= 100)) || ((b >= 40 && b <= 60) && (a >= 70 && a <= 100))? true : false;
  }
  else {
    return false;
  }
}

console.log(checkIncl(41, 71)); // true
console.log(checkIncl(39, 71)); // false
console.log(checkIncl(71, 41)); // true
console.log(checkIncl(71, 39)) // false
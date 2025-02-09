/* 36. Write a JavaScript program that checks whether the last digit of three positive integers is the same.  */

function checkDigit(a, b, c) {
  if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {
    return ((a % 10 == b % 10) && (b % 10 == c % 10))? true : false;
  }
  else {
    return false;
  }
}

console.log(checkDigit(8, 88, 888));
console.log(checkDigit(9, 99, 999));
console.log(checkDigit(6, 36, 72));

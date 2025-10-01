/* 20. Write a JavaScript program to check two given integers whether one is positive and another one is negative. */

function check(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return (a > 0 && b < 0 || a < 0 && b > 0? true : false);
  }
  else {
    return false;
  }
}

console.log(check(4, -4)); // true
console.log(check(-4, 4)); // true
console.log(check(1, 4)); // false
console.log(check(-4, -5)); // false

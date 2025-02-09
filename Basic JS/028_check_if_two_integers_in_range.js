/* 28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range. */

function checkRange(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return ((a >= 50 && a <= 99) ||(b >= 50 && b <= 99))? true : false;
  }
  else {
    return false;
  }
}

console.log(checkRange(40, 32));
console.log(checkRange(54, 54));
console.log(checkRange(100, 100));
console.log(checkRange(99, 77));
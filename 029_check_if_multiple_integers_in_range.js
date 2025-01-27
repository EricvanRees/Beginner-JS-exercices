/* 29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.  */ 

function checkRange(a, b, c) {
  if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {
    return ((a >= 50 && a <= 99) ||(b >= 50 && b <= 99) || (c >= 50 && c <= 99))? true : false;
  }
  else {
    return false;
  }
}

console.log(checkRange(40, 32, 0));
console.log(checkRange(54, 54, 0));
console.log(checkRange(100, 100, 100));
console.log(checkRange(9, 7, 0));
/* 81. Add Two Digits in a Two-Digit Number

Write a JavaScript program to add two digits to a given positive integer of length two. */


function addDigits(aNum, twoDigits) {
  if (Number.isInteger(aNum) && aNum >= 10 && aNum <= 99) {
    if (Number.isInteger(twoDigits) && twoDigits >= 0 && twoDigits <= 99) {
      return parseFloat(aNum + "." + twoDigits);
    }
  } else {
    return false;
  }
}

console.log(addDigits(99, 99));
console.log(addDigits(88, 88));
console.log(addDigits(77, 77));
console.log(addDigits(66, 66));
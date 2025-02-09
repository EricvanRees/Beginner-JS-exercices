/* 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7. */

function checkNr(a) {
  if (Number.isInteger(a) && a >= 0) {
    return (a % 3 == 0 || a % 7 == 0);
  }
  else {
    return false;
  }
}

console.log(checkNr(7));
console.log(checkNr(3));
console.log(checkNr(4));
console.log(checkNr(49));
/* 34. Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.  */

function findLarg(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    if ((a >= 40 && a <= 60) && (b >= 40 && b <= 60)) {
      return (a > b)? a : b;
    } else {
      return 0;
    }
  }
  else {
    return false;
  }
}

console.log(findLarg(41, 45));
console.log(findLarg(45, 41));
console.log(findLarg(71, 34));
console.log(findLarg(45, 12));

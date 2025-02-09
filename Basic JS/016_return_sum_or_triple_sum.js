/* 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.  */  

function sum(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    if (a === b) {
      return (a + b) * 3;
    } else {
      return a + b;
    }
  }
  else {
    return false;
  }
}

console.log(sum(1, 1))
console.log(sum(2, 4));

/* 31. Write a JavaScript program to find the largest of three given integers. */

function findLargest(a, b, c) {
  if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {
    if ((a > b) && (a > c)) {
      return a;
    } else if ((b > a) && (b > c)) {
      return b;
    } else {
      return c;
    }
  }
  else {
    return false;
  }
}

console.log(findLargest(1,2,3));
console.log(findLargest(1,3,2));
console.log(findLargest(3,2,1));
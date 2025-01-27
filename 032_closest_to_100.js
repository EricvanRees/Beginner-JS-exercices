/* 32. Write a JavaScript program to find the closest value to 100 from two numerical values. */

function findClosest(a, b) {
  let abs1 = Math.abs(100 - a);
  let abs2 = Math.abs(100 - b);
  if (abs1 < abs2) {
    return a;
  } else {
    return b;
  }
}

console.log(findClosest(-99, 98));
console.log(findClosest(101, -102));
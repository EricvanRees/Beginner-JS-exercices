/* 
Write a JavaScript program that displays the largest integer among two integers.
*/

function largestInt(int1, int2) {
  return Math.max(int1, int2);
}

console.log(largestInt(4, 3)); // 4
console.log(largestInt(1, 2)); // 2
console.log(largestInt(9, 0)); // 9
console.log(largestInt(88, 22)); // 88
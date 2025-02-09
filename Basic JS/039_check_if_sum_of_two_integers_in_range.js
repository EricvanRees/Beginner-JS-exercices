/* 39. Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.   */

function integerSum(a, b) {
  let sum = a * b;
  if (Number.isInteger(a) && Number.isInteger(b)) {
    if (sum >= 50 && sum <= 80) {
      return 65;
    } else {
    return 80;
    }
  }
  else {
    return false;
  }
}

console.log(integerSum(3, 4)); // 80
console.log(integerSum(8, 10)); // 65
console.log(integerSum(4, 9)); // 80
console.log(integerSum(7, 10)); // 65

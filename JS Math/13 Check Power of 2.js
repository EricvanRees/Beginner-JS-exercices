/* 
Write a JavaScript function to test if a number is a power of 2.
Test Data :
console.log(power_of_2(16));
console.log(power_of_2(18));
console.log(power_of_2(256));
*/

function power_of_2(y) {
  const log = Math.log(y) / Math.log(2);
  return Number.isInteger(log)? true : false;
}

console.log(power_of_2(16));
console.log(power_of_2(18));
console.log(power_of_2(256));
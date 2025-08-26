/* 
Write a JavaScript function to generate a random integer.
Test Data :
console.log(rand(20,1));
console.log(rand(1,10));
console.log(rand(6));
console.log(rand());
15
5
1
0
*/

function rand(min, max=1) {
  if (min < max) {
    return Math.floor(Math.random() * (max - min) + min);
  } else if (min > max) {
    return Math.floor(Math.random() * (min - max) + max);
  } else {
    return 0;
  }
}

console.log(rand(20,1));
console.log(rand(1,10));
console.log(rand(6));
console.log(rand());
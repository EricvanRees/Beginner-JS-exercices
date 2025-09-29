/* 
Write a JavaScript function that returns array elements larger than a number.
*/

function largerThan(anArr, aNum) {
  return anArr.filter((el) => el > aNum)
}

console.log(largerThan([1,2,3], 2)); // [3]
console.log(largerThan([4,5,6,7], 6)); // [7]
console.log(largerThan([6,7,8], 8)); // []
/* 
Write a JavaScript program to find the sum of squares of a numerical vector.
*/

function sumOfSq(anArr) {
  /* let newArr = anArr.map((el) => el ** 2);
  const sum = newArr.reduce((accumulator, currentValue) => accumulator + currentValue,
  0,)
  return sum; */
  const square = el => el ** 2;
  console.log(anArr.forEach(square));
}

console.log(sumOfSq([1,2,3])); // returns 1 + 4 + 9 = 14
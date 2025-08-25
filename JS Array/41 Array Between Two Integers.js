/* 
Write a JavaScript function to generate an array between two integers of 1 step length.

Test Data :

console.log(rangeBetwee(4, 7));
[4, 5, 6, 7]

console.log(rangeBetwee(-4, 7));
[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
*/

function rangeBetwee(int1, int2) {
  let newArr = [];
  for (let i = int1; i <= int2; i++) {
    newArr.push(i);
  }
  return newArr;
}

console.log(rangeBetwee(-4, 7));
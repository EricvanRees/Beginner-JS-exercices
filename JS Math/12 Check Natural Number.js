/* 
Write a JavaScript function to find out if a number is a natural number or not.
Note :
Natural numbers are whole numbers from 1 upwards : 1, 2, 3, and so on ... or from 0 upwards in some area of mathematics: 0, 1, 2, 3 and so on ...
No negative numbers and no fractions.
*/

function isNaturalNum(anyNum) {
  return (typeof(anyNum)=== 'number') && (anyNum > 0) && (anyNum % 1 === 0);
}

console.log(isNaturalNum(-15));
console.log(isNaturalNum(1));
console.log(isNaturalNum(10.22));
console.log(isNaturalNum(10/0));
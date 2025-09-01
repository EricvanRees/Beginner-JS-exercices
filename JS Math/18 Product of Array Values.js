/* 
Write a JavaScript function to calculate the product of values in an array.
Test Data :
console.log(product([1,2,3]));
console.log(product([100,-200,3]));
console.log(product([1,2,'a',3]));
Output :
6
-60000
6
*/

function product(anArr) {
  const product = anArr.filter((el) => Number.isInteger(el))
  .reduce((accumulator, currentVal) => accumulator * currentVal);
  return product;
}

console.log(product([1,2,3]));
console.log(product([100,-200,3]));
console.log(product([1,2,'a',3]));
 


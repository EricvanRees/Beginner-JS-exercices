/* 
Write a JavaScript function to check whether a variable is numerical or not.
Test Data :
console.log(is_Numeric(12));
console.log(is_Numeric('abcd'));
console.log(is_Numeric('12'));
console.log(is_Numeric(' '));
console.log(is_Numeric(1.20));
console.log(is_Numeric(-200));
Output :
true
false
true
false
true
true
*/

function is_Numeric(anyInput) {
  return !isNaN(Number(myInput));
}

console.log(is_Numeric(12));
console.log(is_Numeric('abcd'));
console.log(is_Numeric('12'));
console.log(is_Numeric(' '));
console.log(is_Numeric(1.20));
console.log(is_Numeric(-200));
/* 
Write a JavaScript module that exports multiple named functions for basic arithmetic operations.
*/

const add = ((a, b) => a + b);
const subtract = ((a, b) => a - b);
const multiply = ((a, b) => a * b);
const divide = ((a, b) => a / b);

export {add, subtract, multiply, divide}
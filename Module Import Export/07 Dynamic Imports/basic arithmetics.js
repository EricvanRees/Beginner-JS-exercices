/* 
Write a JavaScript programme that uses dynamic imports to load a module and invoke its function asynchronously.
*/

const add = ((a, b) => a + b);
const subtract = ((a, b) => a - b);
const multiply = ((a, b) => a * b);
const divide = ((a, b) => a / b);

export {add, subtract, multiply, divide}
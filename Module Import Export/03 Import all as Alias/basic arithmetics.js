/* 
Write a JavaScript programme that imports all exports from a module as a single object and use its properties.
*/

const add = ((a, b) => a + b);
const subtract = ((a, b) => a - b);
const multiply = ((a, b) => a * b);
const divide = ((a, b) => a / b);

export {add, subtract, multiply, divide}


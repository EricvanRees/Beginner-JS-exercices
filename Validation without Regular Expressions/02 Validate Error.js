/* 2. Validate Error

Write a JavaScript function to validate whether a given value type is an error or not. */

function checkerror(anyval) {
  return anyval instanceof Error || toString.call(anyval) === '[object Error]';
}

console.log(checkerror(new Error("foo")));
console.log(checkerror(new Error(SyntaxError)));

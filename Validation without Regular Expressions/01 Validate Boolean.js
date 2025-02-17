/* 1. Validate Boolean

Write a JavaScript function to validate whether a given value type is boolean or not. */

function checkbool(anyval) {
  return (typeof(anyval) === "boolean")? true : false; 
}

console.log(checkbool(true));
console.log(checkbool(false));
console.log(checkbool(0));
console.log(checkbool(1));
/* 1. Check Uppercase First

Write a JavaScript program to test whether the first character of a string is uppercase or not. */

let myStr =  "Eric";

let re = /([A-Z])\w+/;

console.log(re.test(myStr));


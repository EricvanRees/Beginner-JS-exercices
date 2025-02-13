/* 2. Validate Credit Card

Write a JavaScript program to check a credit card number. */

let re = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/;

let myStr = "4444-4444-4444-4444";

console.log(re.test(myStr));
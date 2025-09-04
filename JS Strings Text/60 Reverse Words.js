/* 
Write a JavaScript function to reverse words in a given string.

Test Data :

("abc") -> "cba"
("JavaScript Exercises") -> "tpircSavaJ sesicrexE"
(1234) -> "It must be a string."
*/

function reverseWords(str) {
  return typeof str === 'string'? str.split("").reverse().join("") : "It must be a string.";
}

console.log(reverseWords("abc"));
console.log(reverseWords("JavaScript Exercises"));
console.log(reverseWords(1234));


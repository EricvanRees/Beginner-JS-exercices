/* 6. Hide Email Address

Write a JavaScript function that hides email addresses to prevent unauthorized access.
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com" */

function protect_email(aStr) {
 let newArr = aStr.split('@');
 let newStr = '';
 newStr = newArr[0].slice(0, Math.floor(newArr[0].length / 2)) + "...@" + newArr[1];
 return newStr;
}

console.log(protect_email("robin_singh@example.com"));
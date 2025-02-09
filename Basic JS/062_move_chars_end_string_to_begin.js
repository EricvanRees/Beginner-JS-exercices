/* 62. Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.  
 */

function moveChars(aStr) {
  if (aStr.length >= 3) {
    let newStr = myStr.slice(-3,).concat(myStr.slice(0, -3));
    return newStr;
  } else {
   return false;
  }
}

console.log(moveChars("EricvanRees"));

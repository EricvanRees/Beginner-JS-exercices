/* 65. Write a JavaScript program to test whether a string ends with " Script". The string length must be greater than or equal to 6. 
 */

function checkScript(aStr) {
  if (aStr.length >= 6) {
    if (aStr.slice(-6,) === 'Script') {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

console.log(checkScript("JavaScript"));
console.log(checkScript("JavaJavaJava"));
console.log(checkScript("EcmaScript"));

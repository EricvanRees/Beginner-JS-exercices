/* 9. Swap Case in String

Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'. */

function swapCase(aStr) {
  let newStr = '';
  if (typeof(aStr) === 'string') {
    for (let i = 0; i < aStr.length; i++) {
      if (aStr[i] === aStr[i].toLowerCase()) {
        newStr += aStr[i].toUpperCase();
      } else {
        newStr += aStr[i].toLowerCase();
      }
    }
  }
  else {
    return false;
  }
  return newStr;
}

console.log(swapCase('The Quick Brown Fox'));
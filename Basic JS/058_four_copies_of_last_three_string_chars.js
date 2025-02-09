/* 58. Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above. */  

function fourCopies(aStr) {
  if (aStr.length >= 3) {
  let newStr = ''
  newStr += aStr.slice(-3).repeat(3);
  return newStr;
} else {
  return false;
  }
}

console.log(fourCopies('1234'));
console.log(fourCopies('123'));
console.log(fourCopies('12'));

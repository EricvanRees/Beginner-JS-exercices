/* 57. Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.  */


function copyStr(num, aStr) {
  if (typeof(num) === 'number' && typeof(aStr) === 'string') {
    return aStr.repeat(num);
  } else {
    return false;
  }
}

console.log(copyStr(5, "Eric"));
console.log(copyStr(4, "Luuk"));

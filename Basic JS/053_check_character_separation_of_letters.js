/* 53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.  */


let myStr = "this is a string";

function checkIndex(a, b, aString) {
  if (typeof(a) === 'string' && typeof(b) === 'string' && typeof(aString) === 'string') {
    return (aString.indexOf(a) - aString.indexOf(b) === 3) || (aString.indexOf(b) - aString.indexOf(a) === 3)? true : false;
  }
  else {
    return false;
  }
}

console.log(checkIndex("t", "s", myStr));
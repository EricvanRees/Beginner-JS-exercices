/* 35. Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string. */

function checkString(aString, char) {
  if (typeof(aString) === 'string' && typeof(char) === 'string') {
    let substr = aString.slice(1, 4);
    return (substr.includes(char))? true : false;
  }
  else {
    return false;
  }
}

console.log(checkString('weekend', 'e'));
console.log(checkString('weekend', 'k'));
console.log(checkString('weekend', 'z'));
console.log(checkString('weekend', 'a'));

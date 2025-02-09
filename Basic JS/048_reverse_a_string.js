/* 48. Write a JavaScript program to reverse a given string.  */ 


function reverseStr(aString) {
  let newString = '';
  if (typeof(aString) === 'string') {
    for (let i = myString.length - 1; i >= 0; i--) {
      newString += myString[i];
    }
    return newString;
  }
  else {
    return false;
  }
}

let myString = "Eric van Rees";
console.log(reverseStr(myString));

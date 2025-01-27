/* 27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.  */

function checkForJava(aString) {
  if (typeof(aString) === 'string') {
    return (aString.startsWith('Java')? true : false);
  }
  else {
    return false;
  }
}

console.log(checkForJava("JavaScript"));
console.log(checkForJava('Pepernoten'));
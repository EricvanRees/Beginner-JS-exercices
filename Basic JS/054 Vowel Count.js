/* 54. Write a JavaScript program to count the number of vowels in a given string. */


let vowels = "aeiou";

function countVowels(aStr) {
  if (typeof(aStr) === 'string') {
    let counter = 0;
    for (let i = 0; i < aStr.length; i++) {
      if (vowels.includes(aStr[i])) {
        counter++;
      }
    }
    return `This string includes ${counter} vowels`;
  }
  else {
    return false;
  }
}

console.log(countVowels("This is a very long string with a bunch of vowels"));

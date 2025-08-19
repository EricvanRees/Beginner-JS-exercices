/* 7. Count Vowels

Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5 */

/* function vowelcount(aStr) {
  let count = 0;
  let vowels = 'aeoiu';
  for (let i = 0; i < aStr.length - 1; i++) {
    if (vowels.includes(aStr[i])) {
      count += 1;
    }
    else {
      continue;
    }
  }
  return count;
} */

// as arrow function:
const vowelcount = aStr => {
  let count = 0;
  let vowels = 'aeoiu';
  for (let i = 0; i < aStr.length - 1; i++) {
    if (vowels.includes(aStr[i])) {
      count += 1;
    }
    else {
      continue;
    }
  }
  return count;
}

console.log(vowelcount("The quick brown fox"));
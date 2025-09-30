/* 5. Capitalize First Letter of Each Word

Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox ' */

function capitalized(aString) {

  let capArr = [];

  if (typeof(aString) === 'string') {
    let newArr = aString.split(' '); // logs ['the', 'quick', 'brown', 'fox']
    // loop over individual array elements...
    newArr.forEach(el => {
      // ... and capitalize the first letter of each array element and paste the remainder
      let capWordsArr = el[0].toUpperCase() + el.slice(1,);
      // push individual capitalized words to new empty array
     capArr.push(capWordsArr);
    });
  }
  else {
    return false;
  }
   // convert individual array words back to string
  return capArr.join(" ");
} 

// written as arrow function:

const capitalize = aString => {
  let capArr = [];

  if (typeof(aString) === 'string') {    
    let newArr = aString.split(' '); // logs ['the', 'quick', 'brown', 'fox']
    // loop over individual array elements...
    newArr.forEach(el => {
      // ... and capitalize the first letter of each array element and paste the remainder
      let capWord = el[0].toUpperCase() + el.slice(1,);
      // push individual capitalized words to new empty array
      capArr.push(capWord);
    });
  }
    else {
      return false;
    }
    // convert individual array words back to string
    return capArr.join(" ");
}

console.log(capitalized('the quick brown fox')); // logs "The Quick Brown Fox"
console.log(capitalize('the quick brown fox')); // logs "The Quick Brown Fox"
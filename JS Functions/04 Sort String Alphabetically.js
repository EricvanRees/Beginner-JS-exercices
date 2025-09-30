/* 4. Sort String Alphabetically

Write a JavaScript function that returns a string that has letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string. */


function sortMyString(aStr) {
  // check if input is a string
  if (typeof(aStr) === 'string') {
    // split string into separate chars
    let myArr = aStr.split('');
    // sort individual chars alphabetically
    let sortedArr = myArr.sort();
    // join sorted chars into a single string
    return sortedArr.join('');
  }
  else {
    return false;
  }
} 

// written as arrow function:
const sortString =  aStr => {
  // check if input is a string
  if (typeof(aStr) === 'string') {
    // split string into separate chars
    let myArr = aStr.split('');
    // sort individual chars alphabetically
    let sortedArr = myArr.sort();
    // join sorted chars into a single string
    return sortedArr.join('');
  }
  else {
    return false;
  }
}

console.log(sortMyString('webmaster')); // "abeemrstw"
console.log(sortString('webmaster')); // "abeemrstw"
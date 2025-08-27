/* 
Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

Sample arguments : 'w3resource.com', 'o'

Expected output : 2
*/

function countLetters(aStr, letter) {
  const newArr =  aStr.split('');
  const newObj = newArr.reduce((a, b) => {
      return b in a ? a[b]++ : a[b] = 1, a;
    }, {}); 
  return newObj[letter] || 0;
}

console.log(countLetters('w3resource.com', 'o'));
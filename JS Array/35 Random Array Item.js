/* 
Write a JavaScript function to get random items from an array.
*/

function selectRandomItem(anArr) {
  // select random int
  const randomInt = Math.floor(Math.random() * anArr.length);
  return anArr[randomInt];
}

console.log(selectRandomItem([111,22,33,46,59]));
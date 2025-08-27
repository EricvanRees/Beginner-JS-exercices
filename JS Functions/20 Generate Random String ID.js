/* 
Write a JavaScript function that generates a string ID (specified length) of random characters.

Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
*/


function generateStr(strLength) {
  const sampleString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomStr = '';
  for (let i = 0; i < strLength; i++) {
    let randomInt = Math.floor(Math.random() * (strLength + 1));
    randomStr += sampleString[randomInt];
  }
  return randomStr;
}

console.log(generateStr(3));
console.log(generateStr(5));
console.log(generateStr(12));
console.log(generateStr(1));
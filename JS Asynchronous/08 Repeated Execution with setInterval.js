/* 
Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.
*/

const repeat = setInterval(printRandomNum, 2000);

function printRandomNum() {
  const randomNum = Math.floor(Math.random() * 10);
  console.log(`Random number is ${randomNum}`);
}
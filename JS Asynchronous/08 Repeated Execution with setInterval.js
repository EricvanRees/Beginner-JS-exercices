/* 
Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.
*/

const repeat = setInterval(printRandomNum, 2000);

function printRandomNum() {
  const randomNum1 = Math.floor(Math.random() * 10);
  const randomNum2 = Math.ceil(Math.random() * 10);
  console.log(`First random number is ${randomNum1}`);
  console.log(`Second random number is ${randomNum2}`);
}
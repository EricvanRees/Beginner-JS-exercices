/* 
Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.
*/

const repeat = setInterval(printMyName, 2000);

function printMyName() {
  console.log("My name is ...");
}
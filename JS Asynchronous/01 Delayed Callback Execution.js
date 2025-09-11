/* 
Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
*/


setTimeout(myF, 2000);

function myF() {
  const date = new Date();
  console.log(`The current date is ${date}`);
}
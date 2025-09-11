/* 
Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
*/


setTimeout(myF, 2000);

function myF() {
  const randomNr = Math.floor(Math.random() * 10);
  console.log(`The random number is ${randomNr}`);
}
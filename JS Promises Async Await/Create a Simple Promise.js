/* 1. Write a JavaScript function that returns a Promise that resolves with a "Hello, World!" message after 1 second. */

let myPromise = new Promise(function(myResolve, myReject) {
  // create 20 random numbers, then resolve promise with a delay of 1 sec and print a message
  for (let i = 0; i <= 20; i++) {
    console.log(`Random number is ${Math.floor(Math.random() * 10)}`);
  }
  myResolve(); 
}).then(
  function() {
    setTimeout(()=> { console.log("Hello World!");
    }, 1000)
  })
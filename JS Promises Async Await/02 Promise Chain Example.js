/* 
Write a JavaScript function that uses a chain of .then() calls to perform a series of asynchronous tasks.
*/

let myPromise = new Promise(function(myResolve, myReject) {
  // create 20 random numbers, then resolve promise with 4 separate messages
  for (let i = 0; i <= 20; i++) {
    console.log(`Random number is ${Math.floor(Math.random() * 10)}`);
  }
  myResolve(); 
}).then(
  function() {
    setTimeout(()=> { console.log("Message 1!");
    }, 1000)
  })
.then(
  function() {
    setTimeout(()=> { console.log("Message 2!");
    }, 2000)
  })
.then(
  function() {
    setTimeout(()=> { console.log("Message 3!");
    }, 3000)
  })
.then(
  function() {
    setTimeout(()=> { console.log("Message 4!");
    }, 4000)
  })
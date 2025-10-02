/* 
Write a JavaScript function that uses a chain of .then() calls to perform a series of asynchronous tasks.
*/

let myPromise = new Promise(function(myResolve, myReject) {
  try {
    // create 20 random numbers, then resolve promise with 4 separate messages
    for (let i = 0; i <= 20; i++) {
      let randomNum = Math.floor(Math.random() * 10);
      console.log(`Random number is ${randomNum}`);
      if (randomNum === 3) {
      throw new Error("Random number 3 encountered. Rejecting promise...");
    }
  }
  
  myResolve(); 
} catch (err) {
  // Reject Promise if any error occurs
  myReject(err);
  }
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
  .catch(function(error) {
  console.log('Promise rejected:', error.message);
});
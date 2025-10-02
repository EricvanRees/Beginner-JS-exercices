/* 1. Write a JavaScript function that returns a Promise that resolves with a "Hello, World!" message after 1 second. */

let myPromise = new Promise(function(myResolve, myReject) {
  try {
    // 1. producing code
    // create 20 random numbers
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
  // 2. consuming code
}).then(function() {
    setTimeout(()=> { console.log("Hello World!");
    }, 1000)
  })
.catch(function(error) {
  console.log('Promise rejected:', error.message);
});


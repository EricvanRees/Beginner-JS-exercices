/* 
Write a JavaScript function that creates a Promise that resolves after a given number of milliseconds.
*/

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Async task 1");
  }, 500);
})

myPromise
.then((res) => console.log(res));
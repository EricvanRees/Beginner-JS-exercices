/* 
Write a JavaScript function that takes multiple Promises and resolves with the first successful result using Promise.any().
*/

const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Async task 1");
  }, 500);
})

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Async task 2");
  }, 1000);
})
const myPromise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Async task 3");
  }, 2000);
})

const myPromises = [myPromise1, myPromise2, myPromise3];
// Promise.any ONLY handles the first successfully resolved Promise, which is myPromise1
Promise.any(myPromises)
.then((res) => console.log(res)) // logs "Async task 1"
.catch((err) => console.log("Error!"));
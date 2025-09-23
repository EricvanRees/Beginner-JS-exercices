/* 
Write a JavaScript program that takes an array of Promises and logs both resolved and rejected results using Promise.allSettled().
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
// Promise.allSettled() all results are returned from all Promises(), whether they're successfull or not (such as myPromise3)
Promise.allSettled(myPromises)
.then((res) => console.log(res))
.catch((err) => console.log("Error!"));
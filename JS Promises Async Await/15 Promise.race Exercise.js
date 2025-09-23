/* 
 Write a JavaScript program that demonstrates the use of Promise.race to return the first completed Promise.
*/

const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Server Error");
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
// Promise.race() returns the result of the first Promise to complete successfully or unsuccessfully, which is Promise1, and will ignore the rest.
Promise.race(myPromises)
.then((res) => console.log(res))
.catch((err) => console.log("Error!"));
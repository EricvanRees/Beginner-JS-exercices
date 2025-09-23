/* 
Write a JavaScript program that combines synchronous and asynchronous tasks using Promise.all.
*/

function countToTen() {
  let myArr = []
  for (let i = 1; i <= 10; i++) {
    myArr.push(i)
  }
  return myArr
}

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
    resolve("Async task 3");
  }, 2000);
})

const myPromises = [myPromise1, myPromise2, myPromise3];
// Promise.all() returns the result of all successfully resolved Promises
// in this case, all three
// the synchronous countToTen function call is also included in Promise.all()
Promise.all([myPromises, countToTen()])
.then((res) => console.log(res))
.catch((err) => console.log("Error!"));
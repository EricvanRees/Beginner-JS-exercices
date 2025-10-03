/* 
Write a JavaScript program that processes an array of asynchronous tasks sequentially using Promises.
*/
// using synchronous tasks:
/* const task1 = function () {
  let myArr = [];
  for (let i = 1; i <= 10; i++) {
    myArr.push(i);
  }
  return myArr
}
const task2 = function () {
  let myArr = [];
  for (let i = 1; i <= 11; i++) {
    myArr.push(i);
  }
  return myArr
}
const task3 = function () {
  let myArr = [];
  for (let i = 1; i <= 13; i++) {
    myArr.push(i);
  }
  return myArr
}
const task4 = function () {
  let myArr = [];
  for (let i = 1; i <= 6; i++) {
    myArr.push(i);
  }
  return myArr
}

const mytasks = [task1(), task2(), task3(), task4()];
/* 
0: (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
1: (11) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
2: (13) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
3: (6) [1, 2, 3, 4, 5, 6]

Promise.all(mytasks)
.then((data) => console.log(data))
.catch("Error"); */

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

Promise.all(myPromises)
.then((res) => console.log(res)) // logs "Error!"
.catch((err) => console.log("Error!"));
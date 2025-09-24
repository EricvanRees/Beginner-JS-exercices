/* 
Write a JavaScript program that processes an array of asynchronous tasks sequentially using Promises.
*/

const task1 = function () {
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
Promise.all(mytasks)
.then((data) => console.log(data))
.catch("Error");
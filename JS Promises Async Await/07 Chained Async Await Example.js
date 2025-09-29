/* 
Write a JavaScript program that uses async/await to perform three asynchronous tasks in sequence.
*/

async function getComments() {
  const res1 = await fetch('https://jsonplaceholder.typicode.com/comments/1');
  const data1 = await res1.json();
  const res2 = await fetch('https://jsonplaceholder.typicode.com/comments/2');
  const data2 = await res2.json();
  const res3 = await fetch('https://jsonplaceholder.typicode.com/comments/3');
  const data3 = await res3.json();
  
  console.log([data1.body, data2.body, data3.body]);
}

getComments();

// same idea, now using an arrow function
// "async" goes before the parentheses
const getTodo = async () => {
  const res1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data1 = await res1.json();
  const res2 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data2 = await res2.json();
  const res3 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data3 = await res3.json();
  console.log([data1.title, data2.title, data3.title]);
}

getTodo();
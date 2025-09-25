/* 
Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.
*/

function myFetch() {
  fetch('https://jsonplaceholder.typicode.com/comments/1')
  .then((response) => response.json())
  // only log the value of the "body" property
  .then((data) => console.log(data.body));
}

myFetch()
/* 
Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.
*/

const urls = [
  'https://jsonplaceholder.typicode.com/comments/1',
  'https://jsonplaceholder.typicode.com/comments/2',
  'https://jsonplaceholder.typicode.com/comments/3'
]

function myFetch() {
  Promise.all(urls.map(url => fetch(url).then((response) => response.json())))
  .then((data) => {
    // use forEach() to only log the body of the entire json response object
    data.forEach(item => console.log(item.body))
  })
};

myFetch()
/* 
Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.
*/

const urls = [
  'JSON/movies.json',
  'JSON/actors.json',
  'JSON/directors.json'
]

function myFetch() {
  Promise.all(urls.map(url => fetch(url).then((response) => response.json())))
  .then((data) => console.log(data))
}

myFetch()
/* 
Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.
*/

const urls = [
  'https://jsonplaceholder.typicode.com/comment/1',
  'https://jsonplaceholder.typicode.com/comments/2',
  'https://jsonplaceholder.typicode.com/comments/3'
]

function myFetch() {
  Promise.all(
    urls.map(url => 
      fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status} at ${url}`);
        }
        return response.json();
      })
    )
  )
  .then(data => {
    data.forEach(item => console.log(item.body));
  })
  .catch(error => {
    console.log("Fetch failed:", error.message);
  });
};

myFetch()
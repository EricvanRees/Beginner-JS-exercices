/* 
Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.
*/

function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Something went wrong');
        }
      }
    };

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000);
  });
}

// returned Promise is set into a variable containing data of four 
const moviesPromise = getData('./JSON/movies.json');
const actorsPromise = getData('./JSON/actors.json');
const directorsPromise = getData('./JSON/directors.json');

// Promise.all() takes an array of promises
// here it returns an array of arrays (3 different arrays, one for each Promise)
// it is a convenient solution for fetching data from multiple endpoints at the same time
// and in the order you want
Promise.all([moviesPromise, actorsPromise, directorsPromise])
.then((data) => {
  console.log(data);
})
.catch((error) => {
  console.log(error);
});
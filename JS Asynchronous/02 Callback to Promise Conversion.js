/* 
Write a JavaScript program that converts a callback-based function to a Promise-based function.
*/

/* callback-based function

const posts = [
  { title: 'Post One', body: 'This is post one'},
  { title: 'Post Two', body: 'This is post two'},
];

function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post'}, getPosts);
*/ 

// same function using a Promise
const posts = [
  { title: 'Post One', body: 'This is post one'},
  { title: 'Post Two', body: 'This is post two'},
];

// return a new Promise and wrap function inside it, call resolve() after pushing post
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
    resolve();
  }, 2000);
  }) 
}

// getPosts() remains unchanged
function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}

// use "then" instead of simple calling the cb function
// pushes the third post, then loads all three posts on HTML
createPost({ title: 'Post Three', body: 'This is post'})
.then(getPosts);
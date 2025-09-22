/* 
Write a JavaScript program that demonstrates how to catch and handle errors in Promises using .catch().
*/

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({name: 'Eric', age: 45});
    } else {
      reject('Error: something went wrong')
    }
  }, 1000)
});

getUser.then((user) => console.log(user)).catch((error) => console.log(error));


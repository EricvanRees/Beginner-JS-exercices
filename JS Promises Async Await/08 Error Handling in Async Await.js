/* 
Write a JavaScript program to demonstrate how to handle errors in async/await functions using try...catch.
*/

const getUsers = async () => {
  try {
    const response = await fetch('https://httpbin.org/status/500');

    if (!response.ok) {
      throw new Error('Request Failed');
    }

    const data = await response.text();

    console.log(data);
  } 
  catch (error) {
    console.log(error);
  }
};

getUsers();
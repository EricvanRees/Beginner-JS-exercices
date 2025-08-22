/*
Write a JavaScript program to construct the following pattern, using a nested for loop.

*  
* *  
* * *  
* * * *  
* * * * *  

*/

let mystr =  ''

for (let i = 0; i < 5; i++) {
  mystr += '* '
  for (let j = 0; j[i] < 5; j++) {
    mystr += '\n';
  }
  console.log(mystr);
}
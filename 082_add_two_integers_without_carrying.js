/* 82. Add Two Integers Without Carrying

Write a JavaScript program to add two positive integers without carrying.  

see: https://dev.to/ticha/how-to-add-two-numbers-in-javascript-without-using-the-operator-3j7m */

const add = (a,b)=>{
  for(i = 1; i <= b; i++ ){
  a++
  }
  return a
  }

console.log(add(-9,6));
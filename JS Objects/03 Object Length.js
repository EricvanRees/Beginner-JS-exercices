/* 3. Object Length

Write a JavaScript program to get the length of a JavaScript object.
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 }; */

let student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12 };

console.log(`Length of object is: ${Object.keys(student).length}`);
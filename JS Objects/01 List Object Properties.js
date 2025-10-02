/* 1. List Object Properties

Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno */

const student = 
{name : "David Rayy",
sclass : "VI",
rollno : 12 };

// log all object keys (= properties) as a single string
console.log(Object.keys(student).toString());
// access individual object properties
console.log(Object.keys(student)[0]);
console.log(Object.keys(student)[1]);
console.log(Object.keys(student)[2]);
// log object properties and values
console.log(Object.entries(student));

    


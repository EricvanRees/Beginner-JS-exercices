/* 
Write a JavaScript function to retrieve all the values of an object's properties.
*/

function returnObjVals(anObj) {
  return Object.getOwnPropertyNames(anObj);
}

const person = {
  "name": "me",
  "age": 77,
  "job": "programmer",
  "birthday": "05.02.1980"
};

console.log(returnObjVals(person));
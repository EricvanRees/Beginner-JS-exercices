/* 
Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
*/

function returnObjVals(anObj) {
  return Object.entries(anObj);
}

const person = {
  "name": "me",
  "age": 77,
  "job": "programmer",
  "birthday": "05.02.1980"
};

console.log(returnObjVals(person));
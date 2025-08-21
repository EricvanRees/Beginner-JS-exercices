/* 
Write a JavaScript function to check whether an object contains a given property.
*/

function returnObjVals(anObj, aProp) {
  return Object.hasOwn(anObj, aProp);
}

const person = {
  name: "me",
  age: 77,
  job: "programmer",
  birthday: "05.02.1980"
};

console.log(returnObjVals(person, "age"));
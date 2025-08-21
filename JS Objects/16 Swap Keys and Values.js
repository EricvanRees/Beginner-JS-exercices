/* 
Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.
*/

function swapKeyVals(anObj) {
  const swapped = Object.fromEntries(Object.entries(anObj).map(a => a.reverse()))
  return swapped
}

const person = {
  name: "me",
  age: 77,
  job: "programmer",
  birthday: "05.02.1980"
};

console.log(swapKeyVals(person));
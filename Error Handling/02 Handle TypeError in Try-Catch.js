/* 
Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.
*/

function accessprop(anObj, prop) {
  if (Object.hasOwn(anObj, prop)) {
    return anObj[prop];
  } else {
    throw new TypeError(`Object has no property of ${prop}`);
  }

}

try {
  const y = accessprop({"name": "Peter", "age": 99}, "height");
  console.log(y);
} catch (error) {
  console.log(error);
}


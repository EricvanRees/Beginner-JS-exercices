/* 3. String to Array of Words

Write a JavaScript function to split a string and convert it into an array of words.
Test Data :
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"] */

function string_to_array(aStr) {
  if (typeof(aStr) === 'string') {
    return aStr.split(" ")
  }
  else {
    return false;
  }
}

console.log(string_to_array("Robin Singh"));
/* 52. Write a JavaScript program to convert letters of a given string alphabetically. */  

let myString = "ieaoaieou";

function sortStr(aString) {
  if (typeof(aString) === 'string') {
    let myArray = myString.split("");
    let sortedStr = '';
    let sortedArray = myArray.sort();
    sortedArray.forEach(el => {
      sortedStr += el;
    })
    return sortedStr  
  }
  else {
    return false;
  }
}

console.log(sortStr(myString));
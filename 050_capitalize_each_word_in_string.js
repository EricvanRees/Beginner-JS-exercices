/* 50. Write a JavaScript program to capitalize the first letter of each word in a given string. */


function capitalizeStr(aStr) {
  if (typeof(aStr) === 'string') {
    let myArray = aStr.split(" ");
    myArray.forEach(element => {
      console.log(element[0].toUpperCase() + element.slice(1));
    });
  }
  else {
    return false;
  }
}

capitalizeStr("This is a string");

/* 59. Write a JavaScript program to extract the first half of a even string.  
 */

let myStr = "1234123412341234";

function extract(aStr) {

  if (aStr.length % 2 === 0) {
    let newLength = aStr.length / 2;
    return aStr.slice(0, newLength);
  } else {
    return false;
  }
}

console.log(extract(myStr));
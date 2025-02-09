/* 61. Write a JavaScript program to concatenate two strings except for their first character. */ 


function concatStr(aStr, bStr) {
  let newStr = aStr.slice(1,).concat(bStr.slice(1,));
  return newStr;
}

console.log(concatStr("Eric", "Rees"));
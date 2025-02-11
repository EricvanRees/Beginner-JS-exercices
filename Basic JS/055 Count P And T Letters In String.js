/* 55. Write a JavaScript program to check whether a given string contains an equal number of p's and t's. */


let myStr = "ppptttpppttt";

function letterCount(myStr) {
  let pCount = 0;
  let tCount = 0;
  let newArray = myStr.split("");
  
  newArray.forEach(el => {
    if (el === 'p') {
      pCount += 1;
    } else if (el === 't') {
      tCount += 1;
    }
  })
  return (tCount === pCount)? 'equal number of P\'s and T\'s' : 'not equal';
}

console.log(letterCount(myStr));

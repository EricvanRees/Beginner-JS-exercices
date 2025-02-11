/* 56. Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.  */


function divideNums(a, b) {
  const formatter = new Intl.NumberFormat('en-US');
  if (a > 0 && b > 0) {
    let number = a / b;
    return formatter.format(number);
  } else {
    return false;
  }
}

console.log(divideNums(500, 33));

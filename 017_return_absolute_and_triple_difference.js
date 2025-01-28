/* 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19. */

function diff(a) {
  if (Number.isInteger(a)) {
    if (a <= 19) {
      return 19 - a;
    } else {
      return (a - 19) * 3;
    }
  }
  else {
    return false;
  }
}

console.log(diff(3));
console.log(diff(45));
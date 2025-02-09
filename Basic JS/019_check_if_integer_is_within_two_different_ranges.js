/* 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.  */

function check(x) {
  if (Number.isInteger(x)) {
    return (80 < x  && x < 120) || (380 < x && x < 420);
  }
  else {
    return false;
  }
}

console.log(check(119));
console.log(check(81));
console.log(check(300));
console.log(check(600)); 
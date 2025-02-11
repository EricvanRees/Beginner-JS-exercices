/* 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.  */ 

function reverseString(a) {
  if (typeof(a) === 'string') {
    let reversed = '';
    for (let i = a.length - 1; i >= 0; i--) {
      reversed += a[i]; 
    }
    return reversed;
  }
  else {
    return false;
  }
 }

console.log(reverseString('w3resource'));

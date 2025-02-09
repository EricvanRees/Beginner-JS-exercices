/* 21. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.  */

function rewrite(a) {
  if (typeof(a) === 'string') {
    if (a.startsWith('Py')) {
      return a;
    } else {
      a = "Py" + a;
      return a;
    }
  }
  else {
    return false;
  }
}

console.log(rewrite("PyPyPy"));  
console.log((rewrite("hovercraft")));
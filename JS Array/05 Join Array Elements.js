/* 5. Join Array Elements

Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red+Green+White+Black" */

function joinElements(myArr) { 
  if (Array.isArray(myArr)) {
    let myStr = '';
    let myStrPlus = '' 

    myStr =  myArr.toString();
    myStrPlus = myArr.join("+");
    return `${myStr}, ${myStrPlus}`;
  }
    else {
      return false;
    }
}

myColor = ["Red", "Green", "White", "Black"]
console.log(joinElements(myColor));
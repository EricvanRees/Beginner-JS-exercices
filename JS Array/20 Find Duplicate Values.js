/* 
Write a JavaScript program to find duplicate values in a JavaScript array.
*/

let myArr = [11, 12, 13, 11, 12, 13];

const dupl = myArr.filter((item, index) => myArr.indexOf(item) !== index);

console.log(dupl); // logs [11, 12, 13]

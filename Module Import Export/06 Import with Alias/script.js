/* 
Write a JavaScript programme that imports named exports from a module using alias names and use them in another file.
*/

import {add as a, subtract as s, multiply as m, divide as d} from './basic arithmetics.js'

console.log(a(1, 3));
console.log(s(9, 8));
console.log(d(9, 9));
console.log(m(9, 9));


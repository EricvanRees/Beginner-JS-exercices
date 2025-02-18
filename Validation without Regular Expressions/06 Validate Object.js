/* 6. Validate Object

Write a JavaScript function to validate whether a given value is an object or not. */

function isObjectOrNot(value) {
    return typeof value === 'object'
    && value !== null
    && !Array.isArray(value)
    && !(value instanceof RegExp)
    && !(value instanceof Date)
    && !(value instanceof Set)
    && !(value instanceof Map)
}

console.log(isObjectOrNot({a: 1, b: 2}));
console.log(isObjectOrNot([11,22]));
console.log(isObjectOrNot(new Date()));
console.log(isObjectOrNot(/[0-9]/g));
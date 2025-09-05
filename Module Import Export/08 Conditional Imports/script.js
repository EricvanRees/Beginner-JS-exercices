/* 
Write a JavaScript program that imports a specific module conditionally based on a runtime value.
*/

const myBool = true;

if (myBool) {
    import('./basic arithmetics.js')
    .then((module) => {
       console.log(module.add(4, 5));
    });
}
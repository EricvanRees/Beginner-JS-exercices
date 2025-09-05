const myBool = true;

if (myBool) {
    import('./basic arithmetics.js')
    .then((module) => {
       console.log(module.add(4, 5));
    });
}
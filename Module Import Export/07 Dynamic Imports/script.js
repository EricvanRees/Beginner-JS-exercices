import('./basic arithmetics.js')
  .then(module => {
    console.log(module.add(9, 5));
    console.log(module.subtract(9, 5));
    console.log(module.multiply(9, 5));
    console.log(module.divide(9, 9));
  })
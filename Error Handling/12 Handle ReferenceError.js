/* 
Write a JavaScript program that uses a try-catch block to catch and handle a 'ReferenceError' when accessing an undefined variable.
*/

const refError = myVar => {
  try {
    refError(anyName)
    } catch (error) {
    if (error instanceof referenceError) {
      console.log(ReferenceError, error.message);
    } else {
      console.log('Error', error.message);
    }
  }
}

refError(aVar);
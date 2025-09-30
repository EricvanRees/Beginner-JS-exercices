/* 
Write a JavaScript program that uses a try-catch block to catch and handle an 'EvalError' when evaluating an invalid expression.
*/

const errorEval = () => {
    try {
    throw new EvalError('Hello');
  } catch (e) {
    console.log(e instanceof EvalError); // true
    console.log(e.message); // "Hello"
    console.log(e.name); // "EvalError"
    console.log(e.stack); // Stack of the error
  }
}

errorEval();
/* 7. Validate Pure JSON Object

Write a JavaScript function to validate whether a given value type is a pure JSON object or not. */

/* JSON cannot be an object. JSON is a string format. The data is only JSON when it is in a string format. 

An object can invoke a method that belongs to another object using the call() method.

From this, it follows that toString.call(value) !== value.toString().

*/
function checkJSON(value) {
        /* the call() method invokes (calls) a method
        with an object as an argument (parameter) and compares it with a stringified object.
        toString.call(value) means "calling the toString method on an object named "value".
        
        [object, object] is the string representation of a JavaScript object data type. 
        It means you are alerting an instance of an object. 

        When you use the toString() method on an object in JavaScript, you get the string representation – [object, object] – returned.
        
        */
        return toString.call(value) === '[object Object]';
      }

console.log(checkJSON({name:"Adam", age:20}));

console.log(checkJSON({"name":"John", "age":30, "car":null}));
console.log(checkJSON(9090)); 

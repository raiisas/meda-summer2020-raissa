// Regular function, called explicitly by name:
function multiply() {
    var result = 3 * 4;
    console.log("3 multiplied by 4 is ", result);
}
multiply();

// Anonymous function stored in variable.
// Invoked by calling the variable as a function:
var divided = function() {
    var result = 3 / 4;
    console.log("3 divided by 4 is ", result);
}
divided();

// Immediately Invoked Function Expression.
// Runs as soon as the browser finds it:
(function() {
    var result = 12 / 0.75;
    console.log("12 divided by 0.75 is ", result);
}())

/* Functions | are many programs in side our script and wrap around code blocks
1. creates results immediately
2. return values for other functions

All functions are divided by array objects

Named
Anonymous
Immediately invoked function expressions */

/* Return keyword */

function findBiggestFraction() {
    a>b ? console.log("a: ", a) : console.log("b: ", b);
 }
 // Defining variables
 var a = 3/4; 
 var b = 5/7;
 
 // Calling the function
 findBiggestFraction(); // variables must be defined before you call the function

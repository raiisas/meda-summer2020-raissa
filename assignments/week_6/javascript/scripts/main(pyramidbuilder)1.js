/*

*
* *
* * *
* * * *
* * * * *
* * * *
* * *
* *
*

*/

console.log("*")
console.log("**")
console.log("***")
console.log("****")
console.log("*****")

// the double ++ operator will take the current value of the variable and add 1 to it and also replace the old value of the variable.
// myVariable++;
// myVariable--;
// myVariable = myVariable + 1; Does the same thing as the previous line.
// Note: Create the variable first

// Creating "Random" Numbers using JavaScript.
Math.random(); // Creates a random number between 0 and 1;
Math.ceil(); // Takes in a number and rounds it up;
Math.floor; // Takes a number and rounds it down;
Math.round // Takes are number and rounds based on decimal value

var asteriskString = "*";
var pyramidSpeed = "****"
var pyramidHeight = 6;

for (var counter = 0; counter < pyramidHieght; counter++) {
    console.log ("*");

    console.log(asteriskString);
    asteriskString = asteriskString + pyramidSpeed

}
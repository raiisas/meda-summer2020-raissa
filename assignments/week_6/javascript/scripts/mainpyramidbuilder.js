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


// //"*****" -> "****"

// var exampleString = "**";
// var exampleArray;


// // The split function returns an array based on the string. The delimiter is the character that the split is going to look for so it know where to split. Empty string delimiter will split EVERY CHARACTER.
// exampleArray = exampleString.split("");
//             // exampleString.explode(); PHP

// //console.log(exampleArray);

// exampleArray.pop();

// //console.log(exampleArray);

// var updatedString = exampleArray.join("");

// console.log(updatedString);


var exString = "*****";
// Repeating the above until we reach the one asterisk.
for (var i = 0; i < 5; i = i + 1) {
    
    var exArray = exString.split("");
    exArray.pop();

    exString  = exArray.join("");
    console.log(exString);
}
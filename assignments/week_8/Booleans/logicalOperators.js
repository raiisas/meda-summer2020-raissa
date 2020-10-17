// Logical Operators
// && and
// || or
// The Ands are always evaluated before the Ors

var animal1 = "monkey";
var animal2 = "bear";
var animal3 = "tiger";

animal1 === "monkey" && animal2 === "bear"; // true | is animal 1 a monkey? and is animal 2 a bear
animal1 === "ape" && animal2 === "bear"; // false
animal1 === "ape" && animal2 === "bear" && animal3 === "tiger"; // false
animal1 === "monkey" && animal2 === "bear" && animal3 === "tiger"; // true | is animal1 a monkey or is animal2 a bear

animal1 === "monkey" || animal2 === "bear"; // true
animal1 === "ape" || animal2 === "bear"; // true
animal1 === "ape" || animal2 === "ostrich"; // false

animal1 === "monkey" || animal2 === "monkey" && animal3 === "tiger";
(animal1 === "monkey" || animal2 === "monkey") && animal3 === "tiger";

!true; // false
!false; // true

animal1 === "monkey" && animal2 === "bear"; // true
!(animal1 === "monkey" && animal2 === "bear"); // false | add parantheses () for the Ors so they stick together and aren't eaten up by the Ands precedents
animal1 !== "monkey" && animal2 !== "bear"; // false | the ! means Not in this case

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Expressions_and_Operators#Logical_operators

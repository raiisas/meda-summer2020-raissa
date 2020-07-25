var oneValue = 800;

oneValue = 500;

// An JavaScript Array is described using the square brackets symbols, and each value within should be split by a comma except for the last value.

var days = [
    "monday",
    "tueday", 
    "wednesday", 
    "thursday", 
    "friday", 
    "saturaday", 
    "sunday"
];

var randomArray = [100, "hello", true];

var multiDimensionalArray = [
    [10, 20],
    [100, 200]
];

console.log(days[3]);
console.log(days[5]);

days[2] = "Whensday";

days[3] = "Thurs";

console.log(days);
console.log(multiDimensionalArray);

//Array Arithmetic or cancat
//var newArray = randomArray + days;
var newArray2 = randomArray.concat(days);

function addArrays(array1, array2) {

    var newArray = [
         array1[0] + array2[0],
         array1[1] + array2[1]
    ]

    return newArray;

}

var firstArray = [1, 10];
var SecondArray = [9, 10];
var SumArray = addArrays(firstArray, SecondArray);

console.log(SumArray);

days[7] = "superday";

console.log(days);

// Array Functions
// .push() puts a new piece of data at the end of the array. → myArray.push("last item"); → this a modification
// .ppp() removes a piece of data in the array (and returns it to wherever you called .pp()) → .pp() myArray.pop();

// .shift()  puts a new piece of data at the beginning of the array → myArray.unshift("cutting the line!");
// .unshift() removes the first piece of data in the array (and returns it whereever you called .shift) → myArray.shift();

// PUSH EXAMPLE

var multiple = [];
var multiplier = 12;

for (var i = 0; i <= 12; i = i + 1) {

    var product = i * multiplier;

    multiples.push(product);

}

// multiples.shift(); will get rid of the starting 0;

console.log(multiples);

function multipleTables(multiplier, max = 12) {

    var multiples = [];

    for (var i = 0; i <= max; i = i + 1){
    var product = i * multiplier;
    multiples.push(product);
    }

    return multiples;

}

console.log(multipleTables(7, 20));

console.log(multipleTables(18, 20));

days.pop();
console.log(days);

/* Difference between Null and Undefined. 
Null  → intentionally emptying a variable
Undefined  → was never assigned a value
*/

days[4] = null
console.log(days);
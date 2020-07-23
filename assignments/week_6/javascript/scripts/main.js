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
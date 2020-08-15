// Arguments are different from the variables a and b, which were renamed
function findBiggestFraction(a,b) {
    a>b ? console.log("a: ", a) : console.log("b: ", b);
}

var firstFraction = 3/4; //These were renamed in order to resue the function
var secondFraction = 5/7;

findBiggestFraction(firstFraction, secondFraction);


function addNumber() {
    var number1 = 10;
    var number2 = 100;

    var sum = number1 + number2;

    return sum;
}


var mynumber = 110;
var myNumber2 = addNumber();

addNumber();


// Function Arguments and Parameters
// Paramters are Function vaiables.
// The RETURN keyword allows for things to exist beyond the {}

function myFuntion(myFunctionVariable){

    console.log(myFunctionVariable);
}

// Aruguments are the values of the Parameters.

myFunction(1000);

myFunction(10);

myFunction("hello");

myFunction(true);


function mathify(num1, num2){

    var sum = num1 + num2;
    var difference = num1 - num2;
    var product = num1 * num2;
    var quotient = num1 / num2;

    console.log(sum, difference, product, quotient)
}

mathify (90,100);
mathify (8,10);
mathify (1, 70);


function caTax  (priceTotal) {

    var tax = priceTotal * .085;
    var totalExpense = priceTotal + tax;

    return totalExpense;
}                       

console.log ("The total for a $50 purchase is $" + caTax(50));

function writeSentence(priceTotal) {

    console.log("The total for a $" + pricetotal + "purchase is $ " + calTax(priceTotal));

}

excited("hello")
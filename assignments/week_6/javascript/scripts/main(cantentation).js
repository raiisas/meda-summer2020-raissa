var myVariable = 100;

// Cannot multiply Strings

var mySentence = "hundred";

var total = 10 * mySentence;
// total will hold a NaN value (which stands for Not a Number)


var userPurchaseTotal = 5;

var purchaseTax = userPurchaseTotal * .085;

var purchaseTotal = userPurchaseTotal + purchaseTax;

// The plus symbol is not doing addition, instead it is concatenating or combining two Strings. Note that Javascript will convert the number in purchaseTax to a String, to concatenate.
var sentenceToWrite = "The user's purchase tax is " + purchaseTax;

var sentenceToWritePurchase = "The user purchased $" + userPurchaseTotal + " worth of stuff";

var sentenceforTotal = "The user has to pay a total of $" + purchaseTotal;

console.log(sentenceToWritePurchase);
console.log(sentenceToWrite);
console.log(sentenceforTotal);

// Regular Expressions is a way of describing something your looking for in an abstract way. Searching for text
var string1 = 'This is the longest string ever.';
var string2 = 'This is the shortest string ever.';
var string3 = 'Is this the thing called Mount Everest?';
var string4 = 'This is the Sherman on the Mount.';

var regex = /this/; // two slashes is a line comment

// console.log is a function
console.log( regex.test(string1) ); //.test = method
console.log( regex.test(string2) ); 
console.log( regex.test(string3) );
console.log( regex.test(string4) );

// modifiers
regex = /this/i; // i = flag or case insenstive

regex = /^this/i; // ^ beginning

regex = /this$/i; // $ end

regex = /ever.$/i; // . any character

regex = /ever\.$/i; // \. checking for a period

regex = /Moun.$/i;

// More info: SEARCHING FOR TEXT
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions
// http://regex.info/book.html

// Operators

var one = 1,
  two = 2;

one === one; // true | Strict Equality Operator - are the indentical
one !== one; // false | (!=bang) 
one !== two; // true | Strict Inequality Operator - not identitical
one === two; // false

one == one; // true | Not strict equality
one == "1"; // true (?!)
one != "1"; // false (?!) | Not strict inequality
one === "1"; // false

// Relational Operators
one < two; // true  |less than

one > two; // false | greater than

one <= two; // true | less than or equal

one <= one; // true 

one >= two; // false | greater or equal

10 >= two; // true

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators

// Conditionals: If
// windor.confirm function asks the user to do something
var answer = window.confirm("Click OK, get true.  Click cancel, get false.");
answer;

if (answer === true) {
  console.log("You said true!"); 
} // executing this block in the form of an if statement creates an action

if (answer === true) {
  console.log("You said true!");
} else {
  console.log("You said something else");
} // The else block will execute the 2nd action if the first one is false

var answer = window.prompt("Type YES, NO, or MAYBE.  Then click OK.");
if (answer === "YES") {
  console.log("You said YES!");
} else if (answer === "MAYBE") {
  console.log("You said maybe. I don't know what to make of that."); // note the double primes
} else if (answer === "NO") {
  console.log("You said no. :(");
} else {
  console.log("You rebel, you!");
} // else if is a maybe until you get to the else

var answer = window.prompt("Type YES, NO, or MAYBE.  Then click OK.");
if (answer === "YES" || answer === "NO") {
  // Do some common actions for YES and NO

  if (answer === "YES") {
    console.log("You said YES!");
    // do some other things
  } else {
    console.log("You said no. :(");
    // do some things only for NO
  }
} else if (answer === "MAYBE") {
  console.log("You said maybe.  I don't know what to make of that.");
} else {
  console.log("You rebel, you!");
} // if else will continue to ask if true is false

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/if...else

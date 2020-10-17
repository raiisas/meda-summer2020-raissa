// Switch statemnt looks similar at times but acts different. It's used for a lot of branches in the if else statement
var answer = window.prompt("Type YES, NO, or MAYBE.  Then click OK.");

if (answer === "YES") {
  console.log("You said YES!");
} else if (answer === "MAYBE") {
  console.log("You said maybe. I don't know what to make of that.");
} else if (answer === "NO") {
  console.log("You said no. :("); // if you have a lot of "if else" statements, you may want to consider using switch
} else {
  console.log("You rebel, you!");
}

switch (answer) {
  case "YES":
    console.log("You said YES!");
    break; // break is a keyword
  case "MAYBE":
    console.log("You said maybe. I don't know what to make of that.");
    break;
  case "NO":
    console.log("You said no. :(");
    break;
  default: // default is like esle in a if statement
    console.log("You rebel, you!");
    break;
}
// if you don't include a "break" the command will continue until it gets to a break. Use break to execute a single statement

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/switch

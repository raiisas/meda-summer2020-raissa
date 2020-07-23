// FUNCTIONS

function myFunction() {
    var response = prompt("How are you doing?");

    if(response === "") {
        alert("You didn't type anything in!");
    } else {
        console.log(response);
    }
    return true;
}


var didTheyRead = myFunction();

var counter = 0;
while (didTheyRead === false) {
    didTheyRead = myFunction();
}
function pyramidBuilder(pyramidHeight, pyramidSpeed) {

    var asteriskString = "";

      // .length returns a number based on the amount characters in the string. 
    var removalCount = pyramidSpeed.length;
    
    
    for (var counter = 0; counter < pyramidHeight; counter++) {
        
        asteriskString = asteriskString + pyramidSpeed;
        console.log(asteriskString);
    }
    
    for (var i = 0; i < pyramidHeight - 1; i = i + 1) {
        
        var exArray = asteriskString.split("");

        for (var e = 0; e < removalCount; e++) {
            exArray.pop();
        }
        
        asteriskString  = exArray.join("");
        console.log(asteriskString);
    }
    
}



pyramidBuilder(6, "####");
// pyramidBuilder (10, 2, "^")
pyramidBuilder(8, "()");
pyramidBuilder(20, "+-+-")

// pyramidBuidler(9, "***")
// first argument is how many times to run the second argument for our pyramid.

for (var i = 0; i < 100; i++) {
    var randomNumberWithDecimal = (Math.random() * 10) + 1;
var myRandomNumber = Math.floor(randomNumberWithDecimal);

pyramidBuilder(myRandomNumber, "&&&&")

}
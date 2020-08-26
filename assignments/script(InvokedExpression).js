var theBiggest = (function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
})(oneFraction,twoFraction)

var oneFraction = 7/9;
var twoFraction = 13/25;

console.log(theBiggest);
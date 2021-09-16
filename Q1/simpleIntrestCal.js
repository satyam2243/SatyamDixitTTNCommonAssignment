console.clear()

function simpleIntrest(result) {
    result = (p*r*t)/100;
    return result;
}

var p = prompt("Please enter Principle value:");
var r = prompt("Please enter Rate:");
var t = prompt("Please Enter Time: ");

var res
var sI = simpleIntrest(res);

alert("Simple Interest is: " + sI);

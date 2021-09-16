console.clear()
function areaCircle(radii) {
    return radii * radii * Math.PI;
}

var r = parseFloat(prompt("Enter the Radius: "));
var area = areaCircle(r);

alert("Area of the Circle is : " + area);
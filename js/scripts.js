// scripts.js

function getTriangleArea(a, h) {
    if(a > 0 && h > 0) {
		return "Triangle field where base a is equal: " + a + " and height h is equal: " + h + " is equal: " + a*h/2;
    } 
    else if (a <= 0 || h <= 0) {
    	return "Data is incorrect";
    }
}
    
	
var TriangleArea1 = getTriangleArea(8, 9);
console.log(TriangleArea1);

var TriangleArea2 = getTriangleArea(3, 4);
console.log(TriangleArea2);

var TriangleArea3 = getTriangleArea(12, 4);
console.log(TriangleArea3);


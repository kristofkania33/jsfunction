// scripts.js

function getTriangleArea(a, h) {
	if 
		(a < 0 || a == 0 || h < 0 || h == 0)
	{return "Data is incorrect!!!";}
	else if
		(a > 0 && h > 0)
	{return "Triangle field where base a is equal: " + a + " and height h is equal: " + h + " is equal: " + a*h/2;}
}
    
	
	var function1Value = getTriangleArea(8, 9);
	console.log(function1Value);

	var function2Value = getTriangleArea(3, 4);
	console.log(function2Value);

	var function3Value = getTriangleArea(12, 4);
	console.log(function3Value);


/*f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16
where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, and s is the wind speed in miles per hour.*/


function computeNum() {
	var textInput =
		get("aNum").value;
	if (textInput.length<3 ||
	   isNan(textInput)) return;//
	var theValue = theNumber *
		Math.pow(Math.random(), 3);
	get ("output").innerHTML = "The value is <strong>" + theValue.toFixed(2) + "</strong>!";
}
function get(e) {return document.getElementById(e);}

var t=((h+l)/2)
f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16


/*f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16*/
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

/*f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16
where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, and s is the wind speed in miles per hour.*/
/*double checking*/

var h = document.getElementById("h").innerHTML;
var l = document.getElementById("l").innerHTML;
var s = document.getElementById("s").innerHTML;
h = parseInt(h);
l = parseInt(l);
s = parseInt(s);


var t = (h + l) / 2;
var w = Math.pow(s, 0.16);

var f = 35.74 + 0.6215 * t - 35.75 * w + 0.4275 * t * w;

var result = f.toFixed(2);

document.getElementById("windchill").innerHTML = result;

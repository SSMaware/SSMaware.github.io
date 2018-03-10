var main = document.querySelector("main");
var section = document.createElement("section");

var requestURL = '********************';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
	var weather = request.response;
	weatherInfo(weather);
}

function weatherInfo(jsonObj) {

}

<!--

function weatherInfo(jsonObj) {
	var townsArray = jsonObj["towns"];
	for (var i = 0; i < townsArray.length; i++) {
		if (townsArray[i].name != "Placerton") {
			var mydiv = document.createElement("div");
			var myh1 = document.createElement("h1");
			var myp1 = document.createElement("p");
			var myp2 = document.createElement("p");
			var myp3 = document.createElement("p");
			var myp4 = document.createElement("p");

			myh1.textContent = townsArray[i].name;
			myp1.textContent = "Motto: " + townsArray[i].motto;
			myp2.textContent = "Year Founded:" + townsArray[i].yearFounded;
			myp3.textContent = townsArray[i].currentPopulation;
			myp4.textContent = townsArray[i].averageRainfall;

			mydiv.appendChild(myh1);
			mydiv.appendChild(myp1);
			mydiv.appendChild(myp2);
			mydiv.appendChild(myp3);
			mydiv.appendChild(myp4);

			section.appendChild(mydiv);
		}
	}
	main.appendChild(section);
}
-->

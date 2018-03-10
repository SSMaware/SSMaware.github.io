var main = document.querySelector("main");
var section = document.createElement("section");
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', 'http://api.wunderground.com/api/67d090e8fbb75d1e/conditions/q/MN/Franklin.json', true);
request.responseType = 'json';
request.send();
request.onload = function () {
var weather = request.response;
weatherInfo(weather);
	 document.getElementById('place').innerHTML = weather.current_observation.display_location.full;
}

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

			myh1.textContent = townsArray[i].name + " " + "City";
			myp1.textContent = "Motto: " + " " + townsArray[i].motto;
			myp2.textContent = "Year Founded:" + " " + townsArray[i].yearFounded;
			myp3.textContent = "Current Population:" + " " + townsArray[i].currentPopulation;
			myp4.textContent = "Average Rainfall:" + " " + townsArray[i].averageRainfall + " " + "inches";

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

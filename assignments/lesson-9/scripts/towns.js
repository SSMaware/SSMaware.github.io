var main = document.querySelector("main");
var section = document.createElement("section");
var request = new XMLHttpRequest();
request.open('GET', "https://byui-cit230.github.io/weather/data/towndata.json", true);
request.send();
request.onload = function () {
	var request = JSON.parse(requestURL.responseText);
	var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

	function weatherInfo(jsonObj) {

		var townsArray = jsonObj["towns"];
		var mydiv = document.createElement("div");
		var myh1 = document.createElement("h1");
		var myp1 = document.createElement("p");
		var myp2 = document.createElement("p");
		var myp3 = document.createElement("p");
		var myp4 = document.createElement("p");
		for (var i = 0; i < townsArray.length; i++) {
			if (townsArray[i].name != "Placerton")


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




console.log(weatherInfo);
document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
document.getElementById('currentTemperature').innerHTML = weatherInfo.current_observation.temp_f;
document.getElementById('weatherstring').innerHTML = weatherInfo.current_observation.weather;
document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
document.getElementById('feelsLike').innerHTML = weatherInfo.current_observation.feelslike_f;
document.getElementById('precipitation').innerHTML = weatherInfo.current_observation.precip_today_in;
document.getElementById('s').innerHTML = weatherInfo.current_observation.wind_mph;
document.getElementById('windchill').innerHTML = weatherInfo.current_observation.windchill_string;
document.getElementById('currentObservation').innerHTML = weatherInfo.current_observation.ob_url;
}

var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
var towns = request.response;
	populateHeader(towns);
	showTowns(towns);
}

{
	function populateHeader(jsonObj) {
		var townsArray = jsonObj['towns'];
		var mydiv = document.createElement("div");
		var myh1 = document.createElement("h1");
		var myp1 = document.createElement("p");
		var myp2 = document.createElement("p");
		var myp3 = document.createElement("p");
		var myp4 = document.createElement("p");
		for (var i = 0; i < townsArray.length; i++) {
			if (townsArray[i].name != 'Placerton')
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

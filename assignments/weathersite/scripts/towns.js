var main = document.querySelector('main');
var article = document.createElement('article');
article.className = "articleweather";

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
	var towns = request.response;
	showTowns(towns);
}

function showTowns(jsonObj) {
	var townsArray = jsonObj['towns'];

	for (var i = 0; i < townsArray.length; i++) {
		if (townsArray[i].name != "Placerton") {
			var mydiv = document.createElement("div");

			if (townsArray[i].name != "Greenville")
				mydiv.className = "divBox";
			else if (townsArray[i].name == "Greenville")
				mydiv.className = "divBox2";


			var mydiv2 = document.createElement("div");
			var myImg = document.createElement("img");

			var mydiv1 = document.createElement("div");
			var myh1 = document.createElement("h1");
			var myp1 = document.createElement("p");
			var myp2 = document.createElement("p");
			var myp3 = document.createElement("p");
			var myp4 = document.createElement("p");

			if (townsArray[i].name == "Springfield") {
				myImg.setAttribute("src", "images/rainbow-opt.jpg");
			} else if (townsArray[i].name == "Greenville") {
				myImg.setAttribute("src", "images/misty-weather-opt.jpg");
			} else if (townsArray[i].name == "Franklin") {
				myImg.setAttribute("src", "images/snow-park-opt.jpg");
			}

			myh1.textContent = townsArray[i].name + " " + "City";
			myp1.textContent = "Motto: " + " " + townsArray[i].motto;
			myp2.textContent = "Year Founded:" + " " + townsArray[i].yearFounded;
			myp3.textContent = "Current Population:" + " " + townsArray[i].currentPopulation;
			myp4.textContent = "Average Rainfall:" + " " + townsArray[i].averageRainfall + " " + "inches";


			mydiv2.appendChild(myImg);
			mydiv1.appendChild(myh1);
			mydiv1.appendChild(myp1);
			mydiv1.appendChild(myp2);
			mydiv1.appendChild(myp3);
			mydiv1.appendChild(myp4);
			mydiv.appendChild(mydiv2);
			mydiv.appendChild(mydiv1);
			article.appendChild(mydiv);
		}
	}
	main.appendChild(article);
}

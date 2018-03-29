
var SweatherObject = new XMLHttpRequest();

SweatherObject.open('GET', 'https://api.wunderground.com/api/67d090e8fbb75d1e/conditions/q/OR/Springfield.json', true);

SweatherObject.send();

SweatherObject.onload = function () {
	var weatherInfo = JSON.parse(SweatherObject.responseText);
	console.log(weatherInfo);
	document.getElementById('Splace').innerHTML = weatherInfo.current_observation.display_location.full;
	document.getElementById('ScurrentTemperature').innerHTML = weatherInfo.current_observation.temp_f;
	document.getElementById('Sweatherstring').innerHTML = weatherInfo.current_observation.weather;
	document.getElementById('Sw_icon').src = weatherInfo.current_observation.icon_url;
	document.getElementById('SfeelsLike').innerHTML = weatherInfo.current_observation.feelslike_f;
	document.getElementById('Sprecipitation').innerHTML = weatherInfo.current_observation.precip_today_in;
	document.getElementById('Sx').innerHTML = weatherInfo.current_observation.wind_mph;
	document.getElementById('Swindchill').innerHTML = weatherInfo.current_observation.windchill_string;
	/*document.getElementById('currentObservation').innerHTML = weatherInfo.current_observation.ob_url;*/
}


var GweatherObject = new XMLHttpRequest();

GweatherObject.open('GET', 'https://api.wunderground.com/api/67d090e8fbb75d1e/conditions/q/TX/Greenville.json', true);

GweatherObject.send();

GweatherObject.onload = function () {
	var weatherInfo = JSON.parse(GweatherObject.responseText);
	console.log(weatherInfo);
	document.getElementById('Gplace').innerHTML = weatherInfo.current_observation.display_location.full;
	document.getElementById('GcurrentTemperature').innerHTML = weatherInfo.current_observation.temp_f;
	document.getElementById('Gweatherstring').innerHTML = weatherInfo.current_observation.weather;
	document.getElementById('Gw_icon').src = weatherInfo.current_observation.icon_url;
	document.getElementById('GfeelsLike').innerHTML = weatherInfo.current_observation.feelslike_f;
	document.getElementById('Gprecipitation').innerHTML = weatherInfo.current_observation.precip_today_in;
	document.getElementById('Gs').innerHTML = weatherInfo.current_observation.wind_mph;
	document.getElementById('Gwindchill').innerHTML = weatherInfo.current_observation.windchill_string;
	/*document.getElementById('currentObservation').innerHTML = weatherInfo.current_observation.ob_url;*/
}

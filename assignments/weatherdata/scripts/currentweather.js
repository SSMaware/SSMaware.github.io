var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'http://api.wunderground.com/api/67d090e8fbb75d1e/conditions/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function () {
	var weatherInfo = JSON.parse(weatherObject.responseText);
	console.log(weatherInfo);
	document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
	document.getElementById('currentTemperature').innerHTML = weatherInfo.current_observation.temp_f;
	document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
	document.getElementById('feelsLike').innerHTML = weatherInfo.current_observation.feelslike_f;
	document.getElementById('precipitation').innerHTML = weatherInfo.current_observation.precip_today_in;
	document.getElementById('s').innerHTML = weatherInfo.current_observation.wind_mph;
	document.getElementById('windchill').innerHTML = weatherInfo.current_observation.windchill_string;
}

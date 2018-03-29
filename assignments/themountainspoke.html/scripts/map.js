function myMap(){
	var mapAddress = {
		center: new google.maps.LatLng(45.672293,-111.092398),
		zoom:10,
		mapTypeId: google.maps.mapTypeId.HYBRID
	}
	var map = new.google.maps.Map(document.getElementById("map"),mapOptions);
}

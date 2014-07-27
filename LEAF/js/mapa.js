var map;

function initialize() {
	var myLatlng = new google.maps.LatLng(-25.363882,131.044922);

	var mapOptions = {
		zoom: 4,
		disableDefaultUI: true,
		center: myLatlng
	}

	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var marker = addMarker(myLatlng, "Marcador uno");
}

function addMarker(latlng, title){
	return new google.maps.Marker({
		position: latlng,
		map: map,
		title: title
	});
}

google.maps.event.addDomListener(window, 'load', initialize);
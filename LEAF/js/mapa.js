var map;

$(document).on('ready', init());

function init(){
	var estados;

	$.ajax({
		dataType: "json",
		url: "js/estaciones.json",
		data: {},
		beforeSend: function(){console.log("marica");},
		success: function(data){listar_estados(data);},
		error: function(){console.log("Error");}
	});

	$("select #estados").change(function() {
  		console.log("click");
	});

	$("#estados").click(function(){
		console.log("·kbjnl");
	});

}

function listar_estados(data){
	estados = data.Estados;
	for(var key in estados){
		$("#estados").append("<option value=" + key + ">" + key + "</option>");
		
		if(estados[key].Estaciones && estados[key].Estaciones.length > 0){
			console.log("do");
			for(var i=0; i<estados[key].Estaciones.length; i++){
				addMarker(new google.maps.LatLng(estados[key].Estaciones[i].lat, estados[key].Estaciones[i].lgn), estados[key].Estaciones[i].lugar);
			}
			
		}
		// 
	}
}

$("select").change(function() {
  		console.log("click");
	});

function initialize() {
	var mapOptions = {
		zoom: 12,
		disableDefaultUI: true,
		center: new google.maps.LatLng(19.3200988,-99.1521845)
	}

	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
}

function addMarker(latlng, title){
	console.log(latlng);
	return new google.maps.Marker({
		position: latlng,
		map: map,
		title: title
	});
}

google.maps.event.addDomListener(window, 'load', initialize);
var map;

$(document).on('ready', init());

var my_estados = {
	"Aguascalientes":[22.0405661,-102.355039],
	"BajaCalifornia":[30.359001, -115.0309215]
}

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

	$("#estados").live('change', function() {
		estado = my_estados[$(this).val()];
		console.log(estado);
    	map.setCenter(new google.maps.LatLng(estado[0],estado[1]));
	});

}

function listar_estados(data){
	estados = data.Estados;
	for(var key in estados){
		$("#estados").append("<option value=" + key + ">" + key + "</option>");
		
		if(estados[key].Estaciones && estados[key].Estaciones.length > 0){
			for(var i=0; i<estados[key].Estaciones.length; i++){
				addMarker(new google.maps.LatLng(estados[key].Estaciones[i].lat, estados[key].Estaciones[i].lgn), estados[key].Estaciones[i].lugar);
			}
			
		}
		// 
	}
}

function initialize() {
	var mapOptions = {
		zoom: 10,
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
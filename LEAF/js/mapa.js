var map;

$(document).on('ready', init());

var my_estados = {
	"Aguascalientes":[22.0405661,-102.355039],
	"BajaCalifornia":[30.359001, -115.0309215],
	"BajaCaliforniaSur":[25.4362468,-112.3135794],
	"Campeche":[19.3299855,-90.7905291],
	"Coahuila":[27.2107094,-101.8919144],
	"Colima":[19.0984307,-104.0888364],
	"Chiapas":[16.2568741,-92.3009364],
	"Chihuahua":[28.6722468,-106.186553],
	"Sinaloa":[24.7541857,-107.4199704],
	"DF":[19.3200988,-99.1521845],
	"Durango": [24.5947192,-104.8405938],
	"Guanajuato": [20.8757536,-100.8839802],
	"Guerrero": [17.6009455,-100.0949411],
	"Hidalgo": [20.4972412,-98.9243422],
	"Jalisco": [20.8375717,-103.6022721],
	"Mexico": [19.3253627,-99.6045803],
	"Michoacan": [19.1535205,-101.9006079],
	"Morelos": [18.7318963,-99.0633631],
	"Nayarit": [21.8432765,-104.7403113],
	"NuevoLeon": [25.4817892,-99.8141511],
	"Oaxaca": [17.1577833,-96.2099322],
	"Puebla": [19.3507403,-97.8971323],
	"Queretaro": [20.8430849,-99.821474],
	"QuintanaRoo": [19.7401578,-88.0125033],
	"SanLuisPotosi": [22.8251348,-100.3165623],
	"Sonora": [29.4067974,-111.7381017],
	"Tabasco": [17.94917,-92.5533447],
	"Tamaulipas": [24.9435236,-98.6440788],
	"Tlaxcala": [19.4161981,-98.1689873],
	"Veracruz": [19.1788058,-96.1624092],
	"Yucatan": [20.5805196,-88.9702046],
	"Zacatecas": [23.0831271,-102.5352127]
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
		zoom: 4,
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
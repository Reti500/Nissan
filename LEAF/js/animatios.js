$(document).on('ready', init());

// conexion = "img/anim/conexion/iconos 2_0036";
path = "img/anim";
autonomia = "img/anim/autonomia/iconos 2_00504";
bateria = "";
caja = "";
cargadores = "";
chip = "";
conexion = {
	"path": path + "/conexion/conexion_",
	tam: 71,
	anim: false
}
escuadra = "";
flechas = "";
modob = "";
modoeco = "";
nube = "";
plug = "";
reciclar = "";
seguridad = "";
spots = "";

autonomia_num = "";
bateria_num = "";
caja_num = "";
cargadores_num = "";
chip_num = "";
conexion_num = 25;
escuadra_num = "";
flechas_num = "";
modob_num = "";
modoeco_num = "";
nube_num= "";
plug_num = "";
reciclar_num = "";
seguridad_num = "";
spots_num = "";

var index = 0;

function init(){
	var myAnim;
	
	// var myAnim = setInterval(function(){
 //  		$("#imgmotor img").attr('src', nextImage);
	// }, 42);

	$("#secmix #contsecmix #mixinferior #iconmateriales")
		.mouseover(function(){
			console.log("over");
			// myAnim = setInterval(function(){
			// 	console.log("interval");
			// 	$("#imgmotor img").attr('src', nextImage(conexion, conexion_num));
			// }, 42);
		})
		.mouseout(function(){
			index = 0;
			// clearInterval(myAnim);
		});

	$("#secmix #contsecmix #imgsobre")
		.mouseover(function(){
			console.log("over44");
			if(!conexion.anim){
				myAnim = setInterval(function(){
					console.log("interval");
					conexion.anim = true;
					$("#imgmotor img").attr('src', nextImage(conexion));
				}, 42);
			}
		})
		.mouseout(function(){
			index = 0;
			conexion.anim = false;
			clearInterval(myAnim);
		});

	$("#modob")
		.mouseover(function(){
			console.log("ghasd");
			// myAnim = setInterval(function(){
			// 	console.log("interval");
			// 	$("#imgmotor img").attr('src', nextImage(conexion, conexion_num));
			// }, 42);
		})
		.mouseout(function(){
			index = 0;
			// clearInterval(myAnim);
		});

	$("#modoeco")
		.mouseover(function(){
			console.log("otra cosa");
			// myAnim = setInterval(function(){
			// 	console.log("interval");
			// 	$("#imgmotor img").attr('src', nextImage(conexion, conexion_num));
			// }, 42);
		})
		.mouseout(function(){
			index = 0;
			// clearInterval(myAnim);
		});

	$("#imgauton")
		.mouseover(function(){
			console.log("otra hjadb cosa");
			// myAnim = setInterval(function(){
			// 	console.log("interval");
			// 	$("#imgmotor img").attr('src', nextImage(conexion, conexion_num));
			// }, 42);
		})
		.mouseout(function(){
			index = 0;
			// clearInterval(myAnim);
		});

}

function nextImage(item){
	if(index > item.tam){
		index = 0;
	}

	var str = item.path + index + ".png";
	console.log("cambiar por " + str);
	index = index + 1;
	return str;
}
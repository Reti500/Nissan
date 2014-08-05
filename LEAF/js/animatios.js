$(document).on('ready', init());

// conexion = "img/anim/conexion/iconos 2_0036";
path = "img/anim";
autonomia = {
	"path": path + "/autonomia/autonomia_",
	tam: 71,
	anim: false
};
bateria = "";
caja = "";
cargadores = {
	"path": path + "/cargadores/cargadores_",
	tam: 71,
	anim: false
};
chip = "";
conexion = {
	"path": path + "/conexion/conexion_",
	tam: 71,
	anim: false
}
escuadra = "";
flechas = "";
modob = {
	path: path + "/modob/modob_",
	tam: 71,
	anim: false
};
modoeco = {
	path: path + "/modoeco/modoeco_",
	tam: 71,
	anim: false
};
nube = "";
plug = "";
reciclar = "";
seguridad = {
	path: path + "/seguridad/seguridad_",
	tam: 71,
	anim: false
};
spots = "";

var index = 0;

function init(){
	var myAnim;
	
	// var myAnim = setInterval(function(){
 //  		$("#imgmotor img").attr('src', nextImage);
	// }, 42);

	$("#secmix #contsecmix #mixinferior")
		.mouseover(function(){
			if(!conexion.anim){
				myAnim = setInterval(function(){
					conexion.anim = true;
					$("#secmix #contsecmix #mixinferior #iconmotor img").attr('src', nextImage(conexion));
				}, 42);
			}
		})
		.mouseout(function(){
			index = 0;
			conexion.anim = false;
			clearInterval(myAnim);
		});

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

	$("#modob")
		.mouseover(function(){
			if(!modob.anim){
				myAnim = setInterval(function(){
					modob.anim = true;
					$("#modob img").attr('src', nextImage(modob));
				}, 42);
			}
		})
		.mouseout(function(){
			index = 0;
			modob.anim = false;
			clearInterval(myAnim);
		});

	$("#modoeco")
		.mouseover(function(){
			if(!modoeco.anim){
				myAnim = setInterval(function(){
					modoeco.anim = true;
					$("#modoeco img").attr('src', nextImage(modoeco));
				}, 42);
			}
		})
		.mouseout(function(){
			index = 0;
			modoeco.anim = false;
			clearInterval(myAnim);
		});

	$("#imgauton")
		.mouseover(function(){
			if(!autonomia.anim){
				myAnim = setInterval(function(){
					autonomia.anim = true;
					$("#imgauton img").attr('src', nextImage(autonomia));
				}, 42);
			}
		})
		.mouseout(function(){
			index = 0;
			autonomia.anim = false;
			clearInterval(myAnim);
		});

	$("#contcargadores #contcargadores-a #imagen")
		.mouseover(function(){
			if(!cargadores.anim){
				myAnim = setInterval(function(){
					cargadores.anim = true;
					$("#contcargadores #contcargadores-a #imagen img").attr('src', nextImage(cargadores));
				}, 42);
			}
		})
		.mouseout(function(){
			index = 0;
			cargadores.anim = false;
			clearInterval(myAnim);
		});

	$("#carseg #carseg-a #imagen")
		.mouseover(function(){
			if(!seguridad.anim){
				myAnim = setInterval(function(){
					seguridad.anim = true;
					$("#carseg #carseg-a #imagen img").attr('src', nextImage(seguridad));
				}, 42);
			}
		})
		.mouseout(function(){
			index = 0;
			seguridad.anim = false;
			clearInterval(myAnim);
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
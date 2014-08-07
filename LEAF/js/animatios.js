$(document).on('ready', init());

// conexion = "img/anim/conexion/iconos 2_0036";
var path = "img/anim";

//------------------------------------------------------------------------------
var autonomia = { path: path + "/autonomia/autonomia_", tam: 71, anim: false };
var bateria = { path: path + "/bateria/bateria_", tam: 71, anim: false};
var caja = { path: path + "/caja/caja_", tam: 71, anim: false };
var cargadores = { path: path + "/cargadores/cargadores_", tam: 71, anim: false };
var chip = { path: path + "/chip/chip_", tam: 71, anim: false };
var conexion = { path: path + "/conexion/conexion_", tam: 71, anim: false };
var escuadra = { path: path + "/escuadra/escuadra_", tam: 71, anim: false};
var flechas = { path: path + "/flechaz/flechas_", tam: 71, anim: false };
var modob = { path: path + "/modob/modob_", tam: 71, anim: false };
var modoeco = { path: path + "/modoeco/modoeco_", tam: 71, anim: false };
var nube = { path: path + "/nube/nube_", tam: 71, anim: false };
var plug = { path: path + "/plug/plug_", tam: 71, anim: false };
var reciclar = { path: path + "/reciclar/reciclar_", tam: 71, anim: false };
var seguridad = { path: path + "/seguridad/seguridad_", tam: 71, anim: false };
var spots = {};

var index = 0;
var myAnim;

function init(){
	
	// var myAnim = setInterval(function(){
 //  		$("#imgmotor img").attr('src', nextImage);
	// }, 42);

	$("#imgmotor img").mouseover(function(){
			if(!plug.anim){
				myAnim = setInterval(function(){
					plug.anim = true;
					$("#imgmotor img").attr('src', nextImage(plug));
				}, 42);
			}
		}).mouseout(function(){
			index = 0;
			$(this).attr('src', plug.path + "0.png");
			plug.anim = false;
			clearInterval(myAnim);
		});

	$("#imgmateriales img").mouseover(function(){
			if(!reciclar.anim){
				myAnim = setInterval(function(){
					reciclar.anim = true;
					$("#imgmateriales img").attr('src', nextImage(reciclar));
				}, 42);
			}
		}).mouseout(function(){
			index = 0;
			reciclar.anim = false;
			$(this).attr('src', reciclar.path + "0.png");
			clearInterval(myAnim);
		});

	$("#modob img").mouseover(function(){
			if(!modob.anim){
				myAnim = setInterval(function(){
					modob.anim = true;
					$("#modob img").attr('src', nextImage(modob));
				}, 42);
			}
		}).mouseout(function(){
			index = 0;
			modob.anim = false;
			$(this).attr('src', modob.path + "0.png");
			clearInterval(myAnim);
		});

	$("#modoeco img").mouseover(function(){
			if(!modoeco.anim){
				myAnim = setInterval(function(){
					modoeco.anim = true;
					$("#modoeco img").attr('src', nextImage(modoeco));
				}, 42);
			}
		}).mouseout(function(){
			index = 0;
			modoeco.anim = false;
			$(this).attr('src', modoeco.path + "0.png");
			clearInterval(myAnim);
		});

	$("#imgauton img").mouseover(function(){
			if(!autonomia.anim){
				myAnim = setInterval(function(){
					autonomia.anim = true;
					$("#imgauton img").attr('src', nextImage(autonomia));
				}, 42);
			}
		}).mouseout(function(){
			index = 0;
			autonomia.anim = false;
			$(this).attr('src', autonomia.path + "0.png");
			clearInterval(myAnim);
		});

	$("#contcargadores #contcargadores-a #imagen").mouseover(function(){
			if(!cargadores.anim){
				myAnim = setInterval(function(){
					cargadores.anim = true;
					$("#contcargadores #contcargadores-a #imagen img").attr('src', nextImage(cargadores));
				}, 42);
			}
		}).mouseout(function(){
			index = 0;
			cargadores.anim = false;
			$(this).attr('src', cargadores.path + "0.png");
			clearInterval(myAnim);
		});

	$("#imagen2 img").mouseover(function(){
			if(!seguridad.anim){
				myAnim = setInterval(function(){
					seguridad.anim = true;
					$("#imagen2 img").attr('src', nextImage(seguridad));
				}, 42);
			}
		}).mouseout(function(){
			index = 0;
			seguridad.anim = false;
			$(this).attr('src', seguridad.path + "0.png");
			clearInterval(myAnim);
		});

	// $("#img-bat").mouseover(function(){
	// 		console.log("ldsfn");
	// 		if(!bateria.anim){
	// 			myAnim = setInterval(function(){
	// 				bateria.anim = true;
	// 				$("#img-bat img").attr('src', nextImage(seguridad));
	// 			}, 42);
	// 		}
	// 	}).mouseout(function(){
	// 		index = 0;
	// 		bateria.anim = false;
	// 		clearInterval(myAnim);
	// 	});

	// function addEvents(item, animation){
	// 	console.log(animation);
	// 	$(item)
	// 		.mouseover(function(){
	// 			if(!animation.anim){
	// 				myAnim = setInterval(function(){
	// 					animation.anim = true;
	// 					$(item + " img").attr('src', nextImage(animation));
	// 				}, 42);
	// 			}
	// 		})
	// 		.mouseout(function(){
	// 			index = 0;
	// 			animation.anim = false;
	// 			clearInterval(myAnim);
	// 		});
	// }

	function nextImage(animation){
		// console.log(animation);
		if(index > animation.tam){
			index = 0;
		}

		var str = animation.path + index + ".png";
		console.log("cambiar por " + str);
		index = index + 1;
		return str;
	}

}


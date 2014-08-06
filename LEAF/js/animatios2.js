$(document).on('ready', init());

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
var reciclar = {};
var seguridad = { path: path + "/seguridad/seguridad_", tam: 71, anim: false };
var spots = {};

var index = 0;
var myAnim;

function init(){
	$("#img-bat").mouseover(function(){
			if(!bateria.anim){
				myAnim = setInterval(function(){
					bateria.anim = true;
					$("#img-bat img").attr('src', nextImage(bateria));
				}, 42);
			}
		}).mouseout(function(){
			index = 0;
			bateria.anim = false;
			clearInterval(myAnim);
		});

	$("#img-motor").mouseover(function(){
			if(!chip.anim){
				myAnim = setInterval(function(){
					chip.anim = true;
					$("#img-motor img").attr('src', nextImage(chip));
				}, 42);
			}
		}).mouseout(function(){
			index = 0;
			chip.anim = false;
			clearInterval(myAnim);
		});

	$("#img-peso").mouseover(function(){
			if(!nube.anim){
				myAnim = setInterval(function(){
					nube.anim = true;
					$("#img-peso img").attr('src', nextImage(nube));
				}, 22);
			}
		}).mouseout(function(){
			index = 0;
			nube.anim = false;
			clearInterval(myAnim);
		});

	$("#img-frenos").mouseover(function(){
			if(!flechas.anim){
				myAnim = setInterval(function(){
					flechas.anim = true;
					$("#img-frenos img").attr('src', nextImage(flechas));
				}, 22);
			}
		}).mouseout(function(){
			index = 0;
			flechas.anim = false;
			clearInterval(myAnim);
		});

	$("#img-med").mouseover(function(){
			if(!escuadra.anim){
				myAnim = setInterval(function(){
					escuadra.anim = true;
					$("#img-med img").attr('src', nextImage(escuadra));
				}, 22);
			}
		}).mouseout(function(){
			index = 0;
			escuadra.anim = false;
			clearInterval(myAnim);
		});

	$("#img-box").mouseover(function(){
			if(!caja.anim){
				myAnim = setInterval(function(){
					caja.anim = true;
					$("#img-box img").attr('src', nextImage(caja));
				}, 22);
			}
		}).mouseout(function(){
			index = 0;
			caja.anim = false;
			clearInterval(myAnim);
		});
}

function nextImage(animation){
		// console.log(animation);
		if(index > animation.tam){
			index = 0;
		}

		var str = animation.path + index + ".png";
		console.log("cambiar por " + str);
		index += 1;
		return str;
	}
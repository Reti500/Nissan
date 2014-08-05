$(document).on('ready', init());

conexion = "img/anim/conexion/iconos 2_0036";
autonomia = "img/anim/autonomia/iconos 2_00504"
conexion_num = 71;

var index = 0;

function init(){
	var myAnim;
	
	// var myAnim = setInterval(function(){
 //  		$("#imgmotor img").attr('src', nextImage);
	// }, 42);

	$("#secmix")
		.click(function(){
			console.log("kdf");
		})
		.mouseover(function(){
			console.log("over");
			myAnim = setInterval(function(){
				console.log("interval");
				$("#imgmotor img").attr('src', nextImage(conexion, conexion_num));
			}, 42);
		})
		.mouseout(function(){
			index = 0;
			clearInterval(myAnim);
		});
}

function nextImage(item, tam){
	if(index > tam){
		index = 0;
	}

	var str = item + index + ".png";
	console.log("cambiar por " + str);
	index = index + 1;
	return str;
}
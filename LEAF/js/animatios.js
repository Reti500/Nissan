$(document).on('ready', init());

enchufe = "img/anim/anim_1/iconos2_0000";
enchufe_num = 71;

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
				$("#imgmotor img").attr('src', nextImage());
			}, 42);
		})
		.mouseout(function(){
			index = 0;
			clearInterval(myAnim);
		});
}

function nextImage(){
	if(index > enchufe_num){
		index = 0;
	}

	var str = enchufe + index + ".png";
	console.log("cambiar por " + str);
	index = index + 1;
	return str;
}
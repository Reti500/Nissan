var soc_text = {
	"#soc_text1":""+
				"Me pueden gustar muchas cosas, pero encantarme sólo una: mi #Nissan #Xtrail.<br/> <br/>"+
				"",
	"#soc_text2":""+
				"¿Alguien sabe cómo puedo despegar los ojos del nuevo Nissan Xtrail? <br/> <br/>"+
				"",
	"#soc_text3":""+
				"¿Serán todos sus gadgets o su diseño cool? <br/>Yo sólo sé que Nissan Xtrail sí está a OTRO NIVEL. <br/> <br/>"+
				"",
	"#soc_text4":""+
				"Definitivamente tengo un #crush con #Nissan #Xtrail, ¡¡quiero uno a-ho-ra!! <br/> <br/>"+
				"",
	"#soc_text5":""+
				"Hablando de un #NuevoLook, no puedo esperar a ya estar manejando mi #Nissan #Xtrail. <br/> <br/>"+
				"",
};
function fill_social_data() {
	for (var id in soc_text) {
		$(id).html(soc_text[id]);
	}
}
$(document).ready(function() {
	$("#mySpriteSpin").spritespin({
		// path to the source images.
		source: [
		"360-exterior/versa360_00000.png",
		"360-exterior/versa360_00002.png",
		"360-exterior/versa360_00004.png",
		"360-exterior/versa360_00006.png",
		"360-exterior/versa360_00008.png",
		"360-exterior/versa360_00010.png",
		"360-exterior/versa360_00012.png",
		"360-exterior/versa360_00014.png",
		"360-exterior/versa360_00016.png",
		"360-exterior/versa360_00018.png",
		"360-exterior/versa360_00020.png",
		"360-exterior/versa360_00022.png",
		"360-exterior/versa360_00024.png",
		"360-exterior/versa360_00026.png",
		"360-exterior/versa360_00028.png",
		"360-exterior/versa360_00030.png",
		"360-exterior/versa360_00032.png",
		"360-exterior/versa360_00034.png",
		"360-exterior/versa360_00036.png",
		"360-exterior/versa360_00038.png",
		"360-exterior/versa360_00040.png",
		"360-exterior/versa360_00042.png",
		"360-exterior/versa360_00044.png",
		"360-exterior/versa360_00046.png",
		"360-exterior/versa360_00048.png",
		"360-exterior/versa360_00050.png",
		"360-exterior/versa360_00052.png",
		"360-exterior/versa360_00054.png",
		"360-exterior/versa360_00056.png",
		"360-exterior/versa360_00058.png",
		"360-exterior/versa360_00060.png",
		"360-exterior/versa360_00062.png",
		"360-exterior/versa360_00064.png",
		],
		width   : 520,  // width in pixels of the window/frame
		height  : 327,  // height in pixels of the window/frame
		animate : false,
	});
	$('#btn_destroy').click(function(event) {
		$('#destruir').fadeOut(500);
	});
	$('#btn_360').click(function(event) {
		$('#destruir').fadeOut(500);
		$('#cliches').fadeOut(500);
		$('#el360').fadeIn(500);
	});
	$('#volver360').click(function(event) {
		$('#destruir').fadeIn(500);
		$('#cliches').fadeIn(500);
		$('#el360').fadeOut(500);
	});

	/*
	$('#galeria360').click(function(event) {
		$('#carr').fadeIn(500);
		$('#el360').fadeOut();
	    $('.close').click(function() {
	    	$('#carr').fadeOut(500);
	    	$('close').unbind('click');
	    });
	});*/

	$('#el360').fadeOut();
	$('#destruir').fadeOut();
	$('#cliches').fadeOut();
	$('#carr2').fadeOut();
	$('#carr').fadeIn();
	$("#lpriv").magnificPopup({
		type: 'ajax'
	});
	$('.close').click(function() {
    	$('#carr').fadeOut(500);
    	$('#el360').fadeIn(500);
    	$('close').unbind('click');
    });

    /*
    $('#botoncarr').click(function() {
    	$('#carr').fadeOut(500);
    	$('#el360').fadeIn(500);
    });

*/



	$('.option').magnificPopup({
		callbacks: {
		    open: function() {
		      
		      
		     // this part overrides "close" method in MagnificPopup object
		      $.magnificPopup.instance.close = function () {
		      
		          $('#destruir').fadeOut(500);
					$('#cliches').fadeOut(500);
					$('#el360').fadeIn(500);
		      
		           // "proto" variable holds MagnificPopup class prototype
		           // The above change that we did to instance is not applied to the prototype, 
		           // which allows us to call parent method:
		           $.magnificPopup.proto.close.call(this);
		      }; 
		      // you may override any method like so, just note that it's applied globally
		      
		    }
		  }
	});


	// $('.option').click(function(event) {
	// 	$('#cliches').fadeOut(500);
	// });
	// $('#carr > div').load('carrousel.html');

	fill_social_data();
	
});

function cambiar360() {
	$('#carr').fadeOut(500);
    $('#el360').fadeIn(500);
}

function cambiarSpot() {
	$('#carr').fadeIn(500);
		$('#el360').fadeOut();
	    $('.close').click(function() {
	    	$('#carr').fadeOut(500);
	    	$('close').unbind('click');
	    });
}

function cambiarDestroyAd() {
	$('#carr2').fadeIn(500);
	$('#el360').fadeOut();
	$('#carr').fadeOut(500);
    
}


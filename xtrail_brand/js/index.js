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

function cambiar360() {
	$('#carr').fadeOut(500);
    $('#el360').fadeIn(500);
    $('#carr2').fadeOut(500);
}

function cambiarSpot() {
	$('#carr').fadeIn(500);
	$('#el360').fadeOut();
    $('.close').click(function() {
    	$('#carr').fadeOut(500);
    	$('close').unbind('click');
    });
    $('#carr2').fadeOut(500);
}

function cambiarDestroyAd() {
	$('#carr2').fadeIn(500);
	$('#el360').fadeOut();
	$('#carr').fadeOut(500);
}

function cambiarcliches() {
	$('#carr2').fadeIn(500);
	$('#el360').fadeOut();
	$('#carr').fadeOut(500);
	$('#cliches').fadeIn(500);
}
$(document).ready(function() {
	setup360("#mySpriteSpin");
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
		$('#cliches').fadeOut(500);
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

	$('#destruir').fadeOut();
	$('#cliches').fadeOut();
	$('#carr2').fadeIn();
	$('#carr').fadeOut();
	$('#el360').fadeOut();
	$('#cliches').fadeOut();
	$("#lpriv").magnificPopup({
		type: 'ajax'
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
		      		$('#carr2').fadeOut(500);
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


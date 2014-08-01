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
	$('#el360').fadeOut();
	
	$("#lpriv").magnificPopup({
		type: 'ajax'
	});

	$('.option').click(function(event) {
		$('#cliches').fadeOut(500);
	});
	$('#carr > div').load('carrousel.html');
	
});

var the_slick;
$(document).ready(function(){
	the_slick = $('.your_class').slick({
		'onAfterChange':function () {
			var cursl = the_slick.slickCurrentSlide();
			stopOthersVideos(cursl);
		}
	});
});
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var playersIDs = {
	"ytvideo0":{
		"yid":"M7lc1UVf-VE",
		"slide":0
	},
	"ytvideo1":{
		"yid":"-AklUIKneI0",
		"slide":1
	},
};
var players = {};

function onYouTubeIframeAPIReady() {
	for (var i in playersIDs) {
		var pid = playersIDs[i];
		players[i] = new YT.Player(i, {
	        height: '585',
	        width: '960',
	        videoId: pid.yid,
	        events: {
	            'onReady': onPlayerReady,
	            'onStateChange': onPlayerStateChange
	        }
	    });
	};
    the_slick = $('.your_class').slick({
		'onAfterChange':function () {
			var cursl = the_slick.slickCurrentSlide();
			stopOthersVideos(cursl);
		}
	});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    // event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
    // if (event.data == YT.PlayerState.PLAYING && !done) {
    //     setTimeout(stopVideo, 6000);
    //     done = true;
    // }
}

function stopOthersVideos(slide) {
	var player;
	for(i in playersIDs) {
		var pid = playersIDs[i];
		if (pid.slide != slide) {
			player = players[i];
		}
	}
	if (player != null) {
    	player.stopVideo();
	}
}
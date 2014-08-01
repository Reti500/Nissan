$(document).on('ready', init());

function init(){
	var videos_links = [
		"https://www.youtube.com/watch?v=A707N7NCB2A",
		"https://www.youtube.com/watch?v=Gl0-W0ZA0cU",
		"https://www.youtube.com/watch?v=-jzPslF4lr4",
		"https://www.youtube.com/watch?v=HrQGQn5OJR8",
		"https://www.youtube.com/watch?v=dH1K8i3Aey0",
		"https://www.youtube.com/watch?v=Uo2B2ui1uY8",
		"https://www.youtube.com/watch?v=Q1jl9Y2BBjY",
		"https://www.youtube.com/watch?v=E9olKJ-sKQA"
	]

	var triangulos = $('#cliches .pageOption .option');

	for(var i = 0; i < triangulos.length; i++){
		//$(triangulos[i]).click(function(){
		$(triangulos[i]).magnificPopup({
        	disableOn: 700,
        	type: 'iframe',
        	mainClass: 'mfp-fade',
        	removalDelay: 160,
        	preloader: false,

        	fixedContentPos: false
    	});
		//});
	}

}
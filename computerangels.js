function release_the_angels(num_amnt, showtag){
	//
	//add the following between your page's <head></head> tag:
	//<script type="text/javascript" src="jquery-3.0.0.min.js"></script>
	//<script type="text/javascript" src="computerangels.js"></script>
	//
	//call the following on page load:
	//<body onLoad="release_the_angels(20, true);">
	//Note: 20 can be any other number you desire. The more angels you add, the more protected your website is.
	//
	
	console.log("The angels have been released! This website is now protected by computer angels.");
	
	var num_docWidth = $(document).width();
	var	num_docHeight = $(document).height();
	var	num_width = 248; //minimum width of angel
	var	num_height = 189; //maximum height
	var num_angelAmnt = num_amnt; //the amount of angels to release
	
	var angel = $('<div id="angel" />').css(
		{
			'position': 'absolute', 
			'pointer-events': 'none',
			'top': String(num_docHeight - num_height - 50)+'px', 
			'width' : num_width, 
			'height': num_height, 
			'background' : 'none'
			}
		).html('<img src="angels/angel.gif" alt="This website is protected by computer angels.">');
	
	//show the tag if set to true
	if(showtag == true){	
		var tag= $('<div id="angeltag" >/').css({'position':'absolute', 'top':'0px', 'width':271, 'height':23, 'background':'none'}).html('<img src="angels/alert.png" alt="This website is protected by computer angels.">');
		tag.appendTo('body');
	};
	
	
	function make_angel(){
		//
		var num_startLeft = Math.random()*num_docWidth - num_width;
		var num_fligthDuration = Math.random()*8000 + num_docHeight;
		//
		angel
			.clone()
			.appendTo('body')
			.css(
					{
						left: Math.random()*num_docWidth - num_width
					}
				)
				.animate(
					{
						top: -num_height,
						left: (num_startLeft + Math.random()*num_width) - num_width
					},
					num_fligthDuration,
					"linear",
					function() {
						$(this).remove()
						make_angel();
					}
				);
	};
	
	for (var i = 0; i<num_angelAmnt; ++i){
		make_angel();
	};
	
};





		var html = document.getElementById('html');
		var width = document.documentElement.clientWidth;
		html.style.fontSize = width/640*100 + "px";

		window.onresize = function(){
			var html = document.getElementById('html');
			var width = document.documentElement.clientWidth;
			html.style.fontSize = width/640*100 + "px";	
		}

		// swiper设置。


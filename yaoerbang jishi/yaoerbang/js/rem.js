// rem尺寸设置
		var width = document.documentElement.clientWidth;
		var html = document.getElementById("html");
		html.style.fontSize = width/640*100 + "px";
		window.onresize = function(){
			var width = document.documentElement.clientWidth;
			html.style.fontSize = width/640*100 + "px";
		}
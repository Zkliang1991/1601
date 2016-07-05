window.onload=function(){


	var width=document.body.clientWidth;
	//求出当前设备的宽
	var html=document.getElementById('html');
	html.style.fontSize=width/640*100+'px';
	//rem通过设备宽改变rem值
	console.log(width);
	//窗口改变的时候求出宽
	window.onresize=function(){
		var width=document.body.clientWidth;
		html.style.fontSize=width/640*100+'px';
	}
}
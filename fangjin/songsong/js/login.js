var oWidth = document.documentElement.clientWidth;
var html = document.getElementById('html');
html.style.zoom = (oWidth/640);
window.onresize=window.onload =function(){
	var oWidth = document.documentElement.clientWidth;
	console.log(oWidth)
	html.style.zoom = (oWidth/640);
}
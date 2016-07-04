function setZoom(Pswidth){
	var oWidth = document.documentElement.clientWidth;
	var scale = oWidth/Pswidth;    
	document.body.style.zoom = scale;  
}
window.onresize = function(){
	setZoom(640);
}
window.onload = function(){
	setZoom(640);
}
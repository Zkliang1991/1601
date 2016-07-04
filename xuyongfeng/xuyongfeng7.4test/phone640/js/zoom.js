function setZoom(Pswidth){
	var oWidth = document.documentElement.clientWidth;//求出设备宽度
	var scale = oWidth/Pswidth;    //求出缩放比
	document.body.style.zoom = scale;  //给body变化的zoom
}
window.onresize = function(){
	setZoom(640);
}
window.onload = function(){
	setZoom(640);
}


/**
 * Created by Administrator on 2016/7/4.
 */
var oWidth=document.documentElement.clientWidth;
var html=document.getElementById('html');
html.style.fontSize=oWidth/640*100+'px';
window.onresize=function(){
    var oWidth=document.documentElement.clientWidth;
    var html=document.getElementById('html');
    html.style.fontSize=oWidth/640*100+'px';
}
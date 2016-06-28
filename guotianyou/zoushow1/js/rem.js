function rem(){
	var html = document.getElementById('html');
	var width = document.documentElement.clientWidth;
	var height = document.documentElement.clientHeight;
	html.style.fontSize = width/640*93+'px';
	window.onresize=function(){
		var html=document.getElementById('html');
		var width = document.documentElement.clientWidth;
		html.style.fontSize = width/640*100+'px';
	}	
}

rem();
//cookie
function setCookie(name,value,day){
        var date  = new Date();  
        date.setDate(date.getDate() + day );  

        document.cookie=name+"="+value+";expires=" + date ;    
}
//读取cookie函数
function getCookie(name){
    var str  =document.cookie; 
    var arr  =   str.split('; '); 
    for (var i = 0; i < arr.length; i++) {
        //document.write(arr[i]+'<br>');
        var newArr = arr[i].split('='); 
        if(newArr[0]== name){
             //alert(newArr[1]);
             return newArr[1];
        }
    }
    return ''; 
}
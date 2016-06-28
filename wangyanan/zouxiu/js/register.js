
function register(username,psd){
	var mydata={
		status:'register',
       userID:username,
       password:psd
	}
	console.log(username);
	$.ajax({
		url:"http://datainfo.duapp.com/shopdata/userinfo.php",
		type:"post",
		data:mydata,
		success:function(data){
			console.log(data);
		}
	})
}


$('section p').on('tap',function(){
	var name=$("#user").val();
   var password=$('#psd').val();
	//console.log(name);
	register(name,password);
})
$(".header span").on('tap',function(){
	window.location.href="login.html";
})
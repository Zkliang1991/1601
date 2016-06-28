function login(username,psd){
	var mydata={
		status:'login',
       userID:username,
       password:psd
	}
	
	$.ajax({
		url:"http://datainfo.duapp.com/shopdata/userinfo.php",
		type:"post",
		data:mydata,
		success:function(data){
			console.log(data);
			// if(data==0){
			// 	alter("用户名不存在");
			// }
			// if(data==2){
			// 	alter("密码错误");
			// }
			if(data!=0 && data!=2){
				window.location.href="zxiu.html";
			}
		}
	})
}


$('section p').on('tap',function(){
	var name=$("#user").val();
   var password=$('#psd').val();
	//console.log(name);
	login(name,password);
})
$(".header span").on('tap',function(){
	window.location.href="register.html";
})
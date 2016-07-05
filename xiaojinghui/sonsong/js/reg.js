define(["rem","jquery.min"],function(){
	$('#goback').on("click",function(){
		window.location.href = "user.html"
	})
	clickRister()
	//注册点击
	function clickRister(){
		$("#sub").on("click",function(){
			if($("#psw").val()==$("#repsw").val()) {
//				<input type="text" placeholder="账号" id="user"/>
//				<input type="password" placeholder="密码" id="psw"/>
//				<input type="password" placeholder="重复密码" id="repsw"/>
				localStorage.setItem("username",$("#user").val());//保存图片地址
				localStorage.setItem("password",$("#psw").val());//保存图片地址
							$('.alertBox').css("display","block")
				
			}else{
				alert('两次密码不一致')
			}
		})
		$(".alertBox .tologin").on("click",function(){
			$('.alertBox').css("display","none");
			window.location.href='login.html?username'+'='+$('#user').val();
		})
		$(".alertBox .toquit").on("click",function(){
			$('.alertBox').css("display","none");
			window.location.href="login.html";
		})
	}
	$('#login').on("click",function(){
		window.location.href = "../html/login.html"
	})
})
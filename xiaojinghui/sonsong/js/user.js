define(["jquery.min","rem"],function(){
	judgeLogin()
	//判定是否登录
	function judgeLogin(){
//		console.log(getCookie('username'))
		if(localStorage.getItem("username")){
			$('.userinfo span').html(localStorage.getItem("username"))
			$('.userinfo a').css('display','none')
			$('.quit').css('display','block')
			$('.xiugai').css('display','inline-block')
		}else{
			$('.xiugai').css('display','none')
			
			$('.userinfo a').css('display','inline-block')
			$('.quit').css('display','none')
			
		}

	};
	quitLogin()
	//退出
	function quitLogin(){
		$('.quit').on('click',function(){
			setCookie("flag",'0')
			$('.userinfo span').html("未知")
			
			$('.userinfo a').css('display','inline-block');
			$('.quit').css('display','none');
			$('.xiugai').css('display','none')
			localStorage.removeItem("username")
			localStorage.removeItem("password")
		})
	}
	$('.home').on('click',function(){
		window.location.href = "../index.html"
	})
	$('.own').on('click',function(){
		window.location.href = "user.html"
	});
	$('.xiugai').on('click',function(){
		$('.xiumima').css("display","block")
	})
	$('.enter').on("click",function(){
		if($('.prepsw').val() == localStorage.getItem("password")){
			if($('.newpsw').val().length!=0){
				if($('.newpsw').val()==$('.renewpsw').val()){
					localStorage.setItem("password",$(".newpsw").val());
					alert("恭喜你，密码修改成功！")		
				}else{
					alert("两次密码不一致")
				}
			}else{
				alert("新密码不能为空")
			}
		}else{
			alert("原密码错误!")
		}
	})
	$('.quxiao').on("click",function(){
		$('.xiumima').css("display","none")
	})
})
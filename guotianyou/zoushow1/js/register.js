
	readheadfoot()
	//加载头尾部
	function readheadfoot(){
		$("#header").load("header.html",function(){
			$('.title').html('注册');
			$('em').html('登录');
		});
		$("#footer").load("footer.html",function(){
			
			$(".home").on("click",function(){
				window.location.href = "in.html";
				
			})
			$(".type").on("click",function(){
				window.location.href = "sortout.html";
				
			})
			$(".shopping").on("click",function(){
				window.location.href = "myCart.html";
				
			})
			$(".own").on("click",function(){
				
				window.location.href = "myShow.html";
				
			})
			$(".more").on("click",function(){
				window.location.href = "more.html";
				
			})
		
		});
	};
	
	clickRister()
	//注册点击
	function clickRister(){
		$("#sub").on("click",function(){
			if($("#psw").val()==$("#repsw").val()) {
				$.ajax({
					type:"get",
					url:"http://datainfo.duapp.com/shopdata/userinfo.php",
					datatype:"JSONP",
					data:{
						"status":"register",
						"userID":$("#user").val(),
						"password":$("#psw").val(),
					},
					success:function(data){
						if(data==0){
							alert("用户名重名：0")
						}else if(data==1){
//							alert("注册成功：1");
							$('.alertBox').css("display","block")
						}else if(data==2){
							alert("数据库报错：2")
						}
						
						
					}
				});
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

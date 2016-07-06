define(["rem","jquery.min"],function(){
	//登录状态判定
	var flag=0;
	
	$('#goback').on("click",function(){
		window.location.href = "user.html"
	})
		
	clickLogin()
	//点击登录
	function clickLogin(){
		
	
		$("#submit").on("click",function(){
//			//判断是否记住密码
//			if($(".setCook").attr('checked')){
//				setCookie("username", $("#username").val(), 30)
//				setCookie("password", $("#psw").val(), 30)
//			}else{
//				setCookie("username", $("#username").val(), -1)
//				setCookie("password", $("#psw").val(), -1)
//			}

//			localStorage.setItem("username",$("#username").val());//保存图片地址
//			localStorage.setItem("password",$("#psw").val());//保存图片地址
			var user =localStorage.getItem("username");
			var psw = localStorage.getItem("password");
			if($("#username").val()==user){
				if($("#psw").val()==psw){
					window.location.href = "../index.html"
				}else{
					alert("密码错误")
				}
			}
		});
		
	};
	$('#zhuce').on("click",function(){
		window.location.href = "../html/reg.html"
	})
	getUrlUsername()
	//获取url的usernam
	function getUrlUsername(){
		var url = window.location.href;
		console.log(url);
		if(url.indexOf('?')>=0){
			var arr = url.split('?')
			var arruser = arr[1].split('=');
			if(arruser[0]=="username"){
				$("#username").val(arruser[1])
			}else{
				readCook()
			}
		}
	}
	
	
	//读取glocalStorage
	function readCook(){
		if(localStorage.getItem("username")){
			$("#username").val(localStorage.getItem("username"));
			console(localStorage.getItem("username"))
		}
		if(localStorage.getItem("password")){
			$("#psw").val(localStorage.getItem("password"));
		}
	}
	
	//glocalStorage
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

})

//登录状态判定
var flag=0;

//加载头尾部
readheadfoot()
function readheadfoot(){
	$("#header").load("header.html",function(){
		$('.title').html('登录');
		$('em').html('注册');
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
	
clickLogin()
//点击登录
function clickLogin(){
	

	$("#submit").on("click",function(){
		//判断是否记住密码
		if($(".setCook").attr('checked')){
			setCookie("username", $("#username").val(), 30)
			setCookie("password", $("#psw").val(), 30)
		}else{
			setCookie("username", $("#username").val(), -1)
			setCookie("password", $("#psw").val(), -1)
		}
		//ajax请求数据
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			datatype:"JSONP",
			data:{
				"status":"login",
				"userID":$("#username").val(),
				"password":$("#psw").val(),
			},
			success:function(data){
				if(data==0){
					alert("用户名不存在：0")
				}else if(data==2){
					alert("密码错误：2")
				}else{
//						alert("成功：1");
					$('.alertBox').css("display","block")
					var json = JSON.parse(data);
					console.log(json)
					
					setCookie("flag","1")
					window.location.href = "in.html"
					$.each(json, function (n, value) {  
						console.log(value)
						window.localStorage.setItem(n,value);
					})
				}
				
			}
		});
		
	});
	
};

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


//读取cook
function readCook(){
	if(getCookie("username")){
		$("#username").val(getCookie("username"));
	}
	if(getCookie("password")){
		$("#psw").val(getCookie("password"));
	}
}

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


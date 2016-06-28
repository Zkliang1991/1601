

		//init:初始化。RegExp：正则表达式; 定义 _initRegExp，他有三种功能，chkphone  chkEmail  chkPassword.
		var _initRegExp={
			chkphone:function(str){
            var reg=new RegExp("^0?(13|15|18|14|17)[0-9]{9}$");
            return reg.test(str);
       		 },
        	chkEmail: function (str){
			var reg = new RegExp("^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$");
			return reg.test(str);
			},
			chkPassword:function(str){
			// var reg = new RegExp("/^[0-9]{6,18}$/");
			var reg = new RegExp("^[A-Za-z0-9]{6,18}$");
			return reg.test(str);
			}
		}
		
		//对用户账号进行判断的函数testaccount。。。当然先取出用户输入值 $('class名').val()
			function testaccount(){
				var value=$('.username').val();
				//为空或undefined
				if(value==''||value==undefined){
					$('.login-ipt').find('span').html('账号').addClass('z-xg-show').addClass('z-xg-show');
				}
				//1有输入则进行正则手机号判断，  2格式是  名字.之一函数名(正则判断的内容)  3假如判断为真，输出span，格式定义 ，faccount 为 true。
				else if(_initRegExp.chkphone($.trim(value))){
				$('.x-tel').find('span').html('手机号正确').addClass('z-xg-show').css('color','pink');
				faccount =true;
				}
				//假如输入手机号格式判断不正确，进行邮箱判断。
				else if(_initRegExp.chkEmail($.trim(value))){
				$('.x-tel').find('span').html('邮箱有效').addClass('z-xg-show').css('color','pink');
			faccount =true;
				}else{
					//假如输入的内容都不正确，则输出提示。
					$('.x-tel').find('span').html('请输入正确的手机号或者邮箱').addClass('z-xg-show').addClass('z-xg-show').css('color','red');
					faccount=false;
				}
			}
			
			
			function testPassword(){
				var value=$('.pass').val();
//				console.log(_initRegExp.chkEmail($.trim(value)))
				if(value==''||value==undefined){
					$('.login-ipt').find('span').html('你的密码没有输入').addClass('z-xg-show').css('color','deeppink');
				faccount =false;	
				}
				else if(_initRegExp.chkPassword($.trim(value))){
				$('.login-ipt').find('span').html('请牢记你的密码').addClass('z-xg-show').css('color','red');
			faccount =true;	
				}else{
				$('.login-ipt').find('span').html('密码格式不对').addClass('z-xg-show').css('color','red');
					faccount =false;
				}
		
				
			}
		
		
		//注册跳转判断
	
$('.denglu').on('click',function(){
	
	
			
			var flag1=true;
			var flag2=true;
			
			var usernamevalue=$('.username').val();
			
			var pswvalue=$('.pass').val();
			
			
			
			flag1=_initRegExp.chkphone(usernamevalue)||_initRegExp.chkEmail(usernamevalue)
			console.log(flag1)
			flag2=_initRegExp.chkPassword(pswvalue)
			console.log(flag2)
			testaccount()	
			testPassword()
			
			
//			if(flag1==false){		
//				testaccount()	
//			}else if(flag2==false){
//		
//				testPassword()
//			}

			if(flag1==true&&flag2==true&&focde==true){
				window.location.href='login.html'
				
			}
				
	})
		

	
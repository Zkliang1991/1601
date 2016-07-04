window.onload=function(){
	$('.changecode').on('click',function(){
			// var src = $('.codeimg').attr('src');
			changeCodeGif()
		});
		$('.z-xg-code').focus(function(){
			changeCodeGif();
		})
		function randomNumber(max,min){
			// return min+Math.ceil((max-min)*Math.random());
			return min+Math.ceil((max-min)*Math.random())
		}
		function changeCodeGif(){
			var imgNum = randomNumber(7,0);
			//通过向上取整取到1-7直接随机数;
			// console.log(imgNum);
			// $.attr表示修改或者获取行间属性;
			var src = $('.codeimg').attr('src');
			//字符串拼接
			// '../image/code/code'+imgNum+'.gif'
			// var r =随机函数
			// var g =随机函数
			// var b =随机函数
			// rgb(123,123,123);
			// span.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
			$('.codeimg').attr('src','../img/code/code'+imgNum+'.gif');	
			$('.codeimg').attr('alt',imgNum);
			// $('#id').css('backgroundColor','rgb('+r+','+g+','+b+')')
		}
		function testCode(){  
			var codeArray = ['3k7j','rdhr','2dkz','k33i','lhnm','hc4h','u766'];
			// reverse() 数组反转
			// console.log(codeArray.reverse())
			var src = $('.codeimg').attr('src');
			//直接取下标
			// console.log(src.split('/')[3].charAt(4));
			// console.log(src.split('/')[3].substr(4,1));
			var codeNum = src.split('/')[3].substring(4,5);
			//根据img 的src 的 code4.gif 的 第五位的正数n.
			// console.log(codeNum);
			//获取值得方法  val() , html() innerHTML, text()
			var codeInp = $('.z-xg-code').val();
			// var codeInp = $('.z-xg-code').html();
			// var codeInp = $('.z-xg-code').text();
			console.log(codeInp);
			console.log(codeArray[codeNum-1]);
			if(codeInp==''||codeInp==undefined){
				$('.z-xg2').find('span').html('请输入验证码').addClass('z-xg-show');
			}
			else if(codeInp==codeArray[codeNum-1]){
				// console.log('验证码输入正确');
				$('.z-xg2').find('span').html('验证码输入正确').addClass('z-xg-show').css('color','pink');
				fcode =true;
			}else{
				$('.z-xg2').find('span').html('验证码输入错误').addClass('z-xg-show').css('color','red');
			}
		}
	var _initRegExp = {
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

	    function chkphone(str){
	    	var reg=new RegExp("^0?(13|15|18|14|17)[0-9]{9}$");
	        return reg.test(str);
	    }
		function testaccount(){
			// console.log($.trim('   html1601   zhengzhou  12323     ').length)
			// console.log(('   html1601   zhengzhou  12323     ').length)
			// $.trim() 消除字符串开始和结束的空格

			var value = $('.z-xg-username').val();
			console.log(value);
			var length = $.trim(value).length;
			console.log(length);
			if(value==''||value==undefined){
				$('.z-xg1').find('span').html('请输入').addClass('z-xg-show').addClass('z-xg-show');
			}
			else if(chkphone($.trim(value))){
				$('.z-xg1').find('span').html('手机号正确').addClass('z-xg-show').css('color','pink');
				faccount =true;
			}
			else if(_initRegExp.chkEmail($.trim(value))){
				$('.z-xg1').find('span').html('邮箱有效').addClass('z-xg-show').css('color','pink');
				faccount =true;
			}else{
				$('.z-xg1').find('span').html('错误').addClass('z-xg-show').addClass('z-xg-show').css('color','red');
			}
		}

		var fcode = false,faccount = false,fpwd = false;
		//设置cookies
        function setCookie(name,value){
			var Days = 30;
			var exp = new Date();
			exp.setTime(exp.getTime() + Days*24*60*60*1000);
			document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
			// escape() 来编码字符串，然后使用 unescape() 对其解码
        	//获得cookies
			// console.log(exp.toGMTString());
			// toGMTString  toGMTString() 方法可根据格林威治时间 (GMT) 把 Date 对象转换为字符串，并返回结果。

        }
        function setCoo(name,value,day){
            var date=new Date();
            date.setDate(date.getDate()+day);
            document.cookie=encodeURIComponent(name)+'='+encodeURIComponent(value)+'; expires='+date;//设置过期日期
        }
        function getCookie(name){
			var arr;
			var reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
			if(arr=document.cookie.match(reg)){
				return unescape(arr[2]);//反解码
			}
			else{
				return null;
			}
		}
		function cook(){
			var uname = $('.z-xg-username').val();
			setCoo('uname',uname,7);
		}
		var username;
		var password;
		var mypass;
		//设置为全局函数变量
		// console.log($.md5('zhengzhou1601'));
		// console.log($.md5('1601'+'zhangqingqing'));
		// console.log($.md5('zz'+'zhangqingqing'));
		function submit(){

			//md5加密  不可逆

			// var myuser = $.md5($(".username").val());
			testaccount();
			testCode();
			checkPassword();

			if(fcode&&fpwd&&faccount){
				console.log(123);
				username = $('.z-xg-username').val();
				// 给username 赋值
				password = $('.z-xg-compwd').val();
				mypass = $.md5('2016'+password);
				 setCookie('user'+username,username);
				 setCookie('pass'+username,mypass);
				 //把username 和 password 根据 用户名一一对应存储到cookies
				$('.alertBox').show();
			}
		}
		$('.z-xgpwd-submit').bind('click',function(){
			console.log('1601');
			submit();
		})
		function alertToLogin(){
			$('.tologin').on('click',function(){
		//页面间跳转  页面传值
		// javascript:history.go(-1);  表示回退
		//username变成  input 的value;
		window.location.href = 'denglu.html?username='+username+'&password='+mypass;

		// window.location.href=
			});
			$('.toquit').on('click',function(){
				// console.log(123);
				$('.alertBox').hide();
				// window.location.href = 'shoppings.html';
			});
			$('body').find('.z-xgpwd-submit').unbind('keydown').bind('keydown',function(e){
				if(e.keyCode == 13){
					console.log(1222331);
					//绑定enter登录
					$('.z-xgpwd-submit').click();
				}
			});
		}
		alertToLogin();
		// '/^1[3|5|7|8]\d{9}$/'
		// var reg = new RegExp(/^1[3|5|7|8]\d{9}$/);
		// new 一个正则对象，加// 不加 ""号
		// var reg=new RegExp("^0?(13|15|18|14|17)[0-9]{9}$");
		// console.log(reg.test(15212311234))
		// console.log(('/^1[3|5|7|8]\d{9}$/').test(15312341234)));

		function testPassword(){
			// var _this = $(pwdId);
			// $()
			// var password1 = $(pwdId).val();
			var password = $('.z-xg-newpwd').val()
			// var password2 = $('.z-xg-compwd').val();
			console.log($.trim(password));
			// console.log(_this);
			//alt + F3 选中页面中所以的相同字符串
			if(password==''||password==undefined){
				$('.z-xg-newpwd').next().html('请输入密码').addClass('z-xg-show').addClass('z-xg-show');
			}else if(_initRegExp.chkPassword($.trim(password))){
				$('.z-xg-newpwd').next().html('密码有效').addClass('z-xg-show').css('color','pink');
				fpwd = true;
			}else{
				$('.z-xg-newpwd').next().html('密码格式错误').addClass('z-xg-show').css('color','pink');
				$('.z-xg-newpwd').val('').focus();
			}
		}

		function checkPassword(){
			testPassword('.z-xg-compwd');
			var password1 = $('.z-xg-newpwd').val();
			var password2 = $('.z-xg-compwd').val();
			console.log(password1);
			console.log(password2);
			if(password1!=''&&password2!=''&&password1==password2){
				$('.z-xg-compwd').next().html('2次密码一致').addClass('z-xg-show').css('color','pink');
			}else{
				$('.z-xg-compwd').next().html('不一致').addClass('z-xg-show').css('color','red');
				// $('.z-xg-compwd').val('').focus();
			}
		}

}



	// 去注册
	login()
	function login(){
		$('.login').on('tap',function(){
			window.location.href='login.html';
		})
	}








	
require('./zepto.min');
require('./zepto-tap');


// 去注册
register()
function register(){
	$('.register').on('tap',function(){
		window.location.href='register.html';
	})
}



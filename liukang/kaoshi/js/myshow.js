require('./zepto.min');
require('./zepto-tap');




//注册；
register();
function register(){
	$('.reg').on('tap',function(){
		window.location.href='../html/register.html';
	})
	
};


//登录
login();
function login(){
	$('.login').on('tap',function(){
		window.location.href='../html/login.html';
	})
	
};

//我的订单
order()
function order(){
	$('.order').on('tap',function(){
		window.location.href='../html/order.html';
	})
};

//我的优惠券
priv()
function priv(){
	$('.priv').on('tap',function(){
		window.location.href='../html/priv.html';
	})
};

//我的浏览记录
record()
function record(){
	$('.record').on('tap',function(){
		window.location.href='../html/record.html';
	})
};

//我的收藏
collect()
function collect(){
	$('.collect').on('tap',function(){
		window.location.href='../html/collect.html';
	})
};

$("#btn").on('click',function(){
	setTimeout(function(){
		var valu=$('#upfile').val();
		var src=valu.split("fakepath")[1].substring(1)
	console.log(22)
	console.log( '../prc/images/'+src)
	$('.perPhoto').find('img').attr('src','../prc/images/'+src)
},10000)
})
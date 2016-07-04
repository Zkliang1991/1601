define(function(require,exports,module){
	require('./zepto');
	require('zepto-tap');
	require('swiper-3.3.1.min');
	var P = {
		_init:function(){
			P.initswiper();
			P.initusercenter();
		},
		initswiper:function(){
			var myswiper = new Swiper('.swiper-container',{
				loop:true,
				speed:500,
				autoplay:1000,
			})
		},
		initusercenter:function(){
			$('#usercenter').on('tap',function(){
				window.location.href = 'usercenter.html';
			});
		},
	}
	module.exports = {
		init:P._init
	}
})
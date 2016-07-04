define(function(require,exports,module){
	require('./zepto');
	require('zepto-tap');
	require('swiper-3.3.1.min');
	var P = {
		_init:function(){
			P.initswiper();
		},
		initswiper:function(){
			var myswiper = new Swiper('.swiper-container',{
				loop:true,
				speed:500,
				// autoplay:1000,
			})
		},
	}
	module.exports = {
		init:P._init
	}
})
define(function(require,exports,module){
	require('swiper-3.3.1.min');
	// require('jquery-2.2.3');
	require('zoom');
	//定义P对象
	var P = {
		_init:function(){
			P.initswiper();
			
		},
		initswiper:function(){
			// $("footer").load("html/footer.html");
			var myswiper = new Swiper('.swiper-container',{
				autoplay:2000,
				loop:true,
				speed:2000,
				onSlideChangeStart:function(swiper){
					// alert(1);
					if(swiper.activeIndex==2){
						P.initechart();
					}
				}
			})
		},
		initechart:function(){
		}
	}
	//对外提供整个接口
	module.exports = {
		init:P._init
	}
})

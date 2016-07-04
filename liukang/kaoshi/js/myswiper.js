define(function(require){
	require('swiper.min')
	console.log(1234);
	var myswiper = new Swiper('.swiper-container',{
		loop:true,
		speed:2000,
		autoplay:1000,
	})

})
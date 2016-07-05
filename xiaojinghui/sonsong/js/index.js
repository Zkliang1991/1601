define(["jquery.min","rem","swiper-3.3.1.min","taget"],function(){
		SwiperInt()
	//Swiper插件
	function SwiperInt(){
		var mySwiper = new Swiper ('.swiper-container', {
//	    autoplay:2000,
//	    loop: true,
	    // 分页器
	    pagination: '.swiper-pagination',
  		})        
	};
})
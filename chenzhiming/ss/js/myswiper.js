define(function(require){
	require("swiper-3.3.1.min");
	require("zepto");
	console.log(require);
	var myswiper = new Swiper(".swiper-container",{
        speed:3000,
        autoplay:true,
        loop:true,
    })
})
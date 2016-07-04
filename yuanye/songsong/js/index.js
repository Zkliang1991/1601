require.config({
    paths:{
        'swiper':'js/swiper-3.3.1.min',
        'jq':'js/jquery-1.8.3',
    }
})

require(['jq'],function(){
	$('.iconfont').on('click','li',function(){
		$(this).addClass('changeRed').siblings().removeClass('changeRed');
		console.log(123)
	})
});
require(['swiper'],function(){
	var myswiper = new Swiper('.swiper-container',{
        autoplay:2000,
        // speed : 2000,
        loop:true
    })
})
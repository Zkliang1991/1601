require.config({
    paths:{
        'swiper':'swiper-3.3.1.min',
        'zepto':'zepto',
    }
})
require(['swiper'],function(){
    var swiper=new Swiper(".swiper-container",{
        speed:1000,
        autoplay:1000,
        autoplayDisableOnInteraction:false,
        resistanceRatio:0
    })
})
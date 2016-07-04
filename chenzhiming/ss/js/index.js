requirejs.config({
     paths:{
        "rem":"rem",
        "swiper":"swiper-3.3.1.min",
    }
});

// Start the main app logic.
require(["swiper","rem"],function(swiper){
    var myswiper = new swiper(".swiper-container",{
        speed:3000,
        autoplay:1000,
        loop:true,
    })
})
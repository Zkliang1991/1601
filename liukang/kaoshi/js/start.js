require('./swiper-3.3.1.min');
require('./zepto.min');
require('./zepto-tap');



var myswiper= new Swiper('.swiper-container',{

		pagination : '.swiper-pagination',
		resistanceRatio:0,


	})
setTimeout(function(){
	$('#start').hide();
	

},4000)

	$('.s4').on('tap','a',function(){
		window.location.href='index.html';
	})
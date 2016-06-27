var width = document.documentElement.clientWidth;
		var html = document.getElementById("html");
		html.style.fontSize = width/640*100 + "px";
		window.onresize = function(){
			var width = document.documentElement.clientWidth;
			html.style.fontSize = width/640*100 + "px";
		}

var nav = ['介绍','详情','实拍'];
var mySwiper1 = new Swiper('#swiper-out',{
			grabCursor : true,
			simulateTouch : true,
			pagination : '#sp-out',
			paginationClickable :true,
			watchSlidesProgress : true,
			watchSlidesVisibility : true,
			 paginationBulletRender: function (index, className) {
      		return '<li class="' + className+'">'+nav[index]+'</li>';
 			 }
		})
$(document.body).on("touchstart",mySwiper1,function(){
			var index1 = mySwiper1.activeIndex;
			if(index1==0){
				mySwiper1.lockSwipeToPrev();
			}
			else if(index1==4){
				mySwiper1.lockSwipeToNext();
			}
			else{
				mySwiper1.unlockSwipeToPrev();
				mySwiper1.unlockSwipeToNext();
			}
		})


	var mySwiper2 = new Swiper('#swiper-in',{
			grabCursor : true,
			simulateTouch : true,
			pagination : '#sp-in',
			paginationClickable :true,
			watchSlidesProgress : true,
			watchSlidesVisibility : true,
			paginationElement : 'li'
 		})
		$(document.body).on("touchstart",mySwiper1,function(){
			var index2 = mySwiper2.activeIndex;
			if(index2==0){
				mySwiper2.lockSwipeToPrev();
			}
			else if(index2==3){
				mySwiper2.lockSwipeToNext();
			}
			else{
				mySwiper2.unlockSwipeToPrev();
				mySwiper2.unlockSwipeToNext();
			}
		})

$("#back").on("tap",function(){
	window.history.go(-1);
})

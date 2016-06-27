// rem尺寸设置
var width = document.documentElement.clientWidth;
		var html = document.getElementById("html");
		html.style.fontSize = width/640*100 + "px";
		window.onresize = function(){
			var width = document.documentElement.clientWidth;
			html.style.fontSize = width/640*100 + "px";
		}
// 外部swiper
		var icon = ['&#xe600;','&#xe67f;','&#xe632;','&#xe627;','&#xe67f;']
		var nav = ['首页','分类','购物车','我的秀','更多']
		var mySwiper1 = new Swiper('#swiper-out',{
			grabCursor : true,
			simulateTouch : true,
			pagination : '#sp-out',
			paginationClickable :true,
			watchSlidesProgress : true,
			watchSlidesVisibility : true,
			 paginationBulletRender: function (index, className) {
      		return '<li class="' + className + ' iconfont"><p>' + icon[index] + '</p><p>'+nav[index]+'</p></li>';
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
		

//banner的swiper
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
		$("ul.main li").addClass('iconfont');

	//首页banner数据加载
	$.ajax({
		url:"http://datainfo.duapp.com/shopdata/getBanner.php",
		type:"get",
		dataType:"jsonp",
		success:function(data){
			banner(data);
		}
	})
	function banner(data){
		var a = JSON.parse(data[0].goodsBenUrl);
		var l = $(".sw2 .swiper-slide").length;
		for(var i = 0;i<l;i++){
			$(".sw2 .swiper-slide")[i].style.background = "url("+a[i]+") center no-repeat";
		}
	}

$("#scroller li.list").on("tap",function(){
	window.location.href = '../html/detail.html';
})
//加入购物车

// $(".index #cart-in").on("tap",function(){
// 	$.ajax({
// 		url:'http://datainfo.duapp.com/shopdata/updatecar.php',
// 		type:'post',
// 		data:{
// 			number:num,
// 			userID: $userid,
// 			goodsID: $goodsid
// 		},
// 		success:function(data){
// 			if(data=='0') {
			
// 			}else if(data=='1') {
				
// 			}
// 		},
// 		error:function(data){
// 			return false;
// 		}
// 	})
// })



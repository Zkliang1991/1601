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

var url = window.location.href;
var  a = url.split("html?")
var goodsID = a[1].split("=")[1];
$.ajax({
		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
		type:"post",
		dataType:"jsonp",
		data:{
			goodsID:goodsID,
		},
		success:function(data){
			detail(data,goodsID);
		}
	})
	function detail(data,goodsID){
		console.log(goodsID)
		for(var i=0;i<data.length;i++){
			if(data[i].goodsID == goodsID){
				var discount = data[i].discount;
				var price = data[i].price;
				var goodsName = data[i].goodsName;
				var imgsUrl = data[i].imgsUrl;
				var arrUrl = JSON.parse(imgsUrl);
				console.log(arrUrl)
				for(var j=0;j<4;j++){
				console.log(arrUrl);
					// $("#swiper-in .swiper-slide")[j].find("img").src = "url("arrUrl[j]")";
				}
				
			}
		}
		
		
	}
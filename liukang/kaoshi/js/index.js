

require('./swiper-3.3.1.min');
require('./myiscroll');

	var myswiper= new Swiper('.swiper-container',{
			autoplay:2000,
			
			pagination : '.swiper-pagination',
			loop:true,
			resistanceRatio:0,
			autoplayDisableOnInteraction:false,
		})



	
	data()
	function data(){
		$.ajax({
			url:'http://datainfo.duapp.com/shopdata/getBanner.php',
			type:'get',
			dataType:'jsonp',
			success:function(data){
				var l=data.length;
				var arr=[];
				var s= $('.banner .swiper-slide');
				for (var i = 0; i < l; i++) {
					var url = JSON.parse(data[i].goodsBenUrl)[0];
					arr.push(url)
				
				}
				s.eq(0).find('img').attr('src',arr[3])

				for (var j = 0; j < arr.length; j++) {
					s.eq(j+1).find('img').attr('src',arr[j]);

				}
				s.eq(5).find('img').attr('src',arr[0])

			}
		})
		
	};

$('.buycar').on('click',function(){

	var $Img=$(this).attr('data-img');
	var $price =$(this).attr('data-price');
	var $info=$(this).attr('data-info');
	var $id=$(this).attr('data-id');
	
	
	var goodsTy = 'goodsTy-'+ $id;
	var Count=1;
	addCount();
	var thisGoods=JSON.parse(localStorage.getItem(goodsTy));
	if(thisGoods!='' && thisGoods!=undefined){
		Count+=thisGoods.buysCount;
	}
	var objData={"goodType":"goodTy"+$id,"id":$id,"info":$info,"price":$price,"img":$Img,"buysCount":Count}
	localStorage.setItem(goodsTy,JSON.stringify(objData))
	addCount();
})

//刷新购物车数量
addCount();
function addCount(){
	var reg=/^goodsTy-/;
	var mycount=0;
	for (var i = 0; i < localStorage.length; i++) {
		var localkey=localStorage.key(i);

		if(reg.test(localkey)){
			var myData=JSON.parse(localStorage.getItem(localkey))
			
		mycount+=myData.buysCount

		}
	}

	$('.car-num').html(mycount);
	$('.num span').html(mycount)
}

//初始数据
$('#thelist li').eq(0).find('.buycar').attr('data-info',$('.txt span').html());
$('#thelist li').eq(0).find('.buycar').attr('data-img',$('.pic img').attr('src'));
$('#thelist li').eq(0).find('.buycar').attr('data-id',0);
$('#thelist li').eq(0).find('.buycar').attr('data-price',$('.price span').eq(0).find('b').html());

$('#thelist li').eq(1).find('.buycar').attr('data-info',$('.txt span').html());
$('#thelist li').eq(1).find('.buycar').attr('data-img',$('.pic img').attr('src'));
$('#thelist li').eq(1).find('.buycar').attr('data-id',0);
$('#thelist li').eq(1).find('.buycar').attr('data-price',$('.price span').eq(0).find('b').html());

$("#thelist li").find('img').on('click',function(){
	var _this=$(this).parent().parent().parent().find('.buycar');
	var $Img=_this.attr('data-img');
	var $price =_this.attr('data-price');
	var $info=_this.attr('data-info');
	var $id=_this.attr('data-id');
console.log($price)
	window.location.href='introduce.html?id='+$id+'&info='+$info+'&img='+$Img+'&price='+$price;

})
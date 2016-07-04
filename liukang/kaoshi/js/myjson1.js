require('./zepto.min');
require('./zepto-tap');
function getData(){
	$.ajax({
		url:'http://datainfo.duapp.com/shopdata/getGoods.php',
		type:'get',
		dataType:'jsonp',
		success:function(jsonp){
			var l=jsonp.length;
			console.log(l)
			for (var i = 0; i < l; i++) {
				var goodsName=jsonp[i].goodsName;
				var goodsListImg=jsonp[i].goodsListImg;
				var price= jsonp[i].price;
				var discount =jsonp[i].discount;
				var Yprice=parseInt(price/discount*10 );
				if(discount==0){
					Yprice=price;
				}
				var oLi=$('#thelist li').first().clone();
				oLi.find('.pic').find('img').attr('src',goodsListImg);
				oLi.find('.txt').find('p').find('span').html(goodsName);
				oLi.find('.price').find('span').eq(0).html( price);
				oLi.find('.price').find('span').eq(1).html(Yprice);
				oLi.find('.price').find('span').eq(2).html( discount+'折');
$('#thelist').append(oLi);
			}
			
		console.log(goodsListImg)
		// 	myScroll.refresh();	
		}
	})
}
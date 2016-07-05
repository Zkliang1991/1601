require('./zepto.min');
require('./zepto-tap');


//倒计时
var tim=300000;
setInterval(function(){
	tim--;
	var day=parseInt(tim/3600/24);
	var h=parseInt((tim)/3600%24);
	var m =parseInt(tim/60%60);
	var s=parseInt(tim%60);
	$('.time').find('span').html(
		day+'天'+h+'时'+m+'分'+s+'秒'
		)
},1000)


//跳转
$('.details').on('tap',function(){
	window.location.href='details.html'

})




getUrlData();
	//........获取通过url传过来的数据；

	function getUrlData(){
		var $data=window.location.href;
		console.log($data)
		var $img=$data.split('?')[1].split('&')[2].split('=')[1];
		var $price=$data.split('?')[1].split('&')[3].split('=')[1]
		var $info=$data.split('?')[1].split('&')[1].split('=')[1]
		var $id=$data.split('?')[1].split('&')[0].split('=')[1]
		console.log($price)
		$('.photo1').find('img').attr('src',$img);
		$('.tit').find('span').text($price);
		$('.tit').text(decodeURIComponent($info))
	}

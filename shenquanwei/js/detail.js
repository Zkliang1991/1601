function r(dat) {
	return c(dat.getDate()) + "天" +c(dat.getHours()) + "小时" + c(dat.getMinutes()) +"分钟" + c(dat.getSeconds())+"秒";
}

function c(x) {
	if (x < 10) {
		x = "0" + x;
		return x;
	} else {
		x = "" + x;
		return x;
	}
}

var timer=7;

onload=function(){
	var spandjs=document.getElementsByClassName("djs-time")[0];
	sec=(timer-1-1/3)*24*60*60*1000;
	setInterval(function(){
		sec=sec-1000;
		var t=new Date(sec);
		spandjs.innerHTML=r(t);
	},1000);
}
$(function(){
	$( "section").css("display","none");
	$( "section:nth-of-type(1)" ).css("display","block");
	$(".detail li").on("touchstart",function(){
		$(this).siblings().children().css("color","#fff");
		$(this).children().css("color","#d91351");
		var a=$(this).index()+1;
		$( "section").css("display","none");
		$( "section:nth-of-type("+a+")" ).css("display","block");
	});
	var goodsID={"goodsID":getlocation().goodsID};
	$.ajax({
		type:"get",
		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
		data:goodsID,
		dataType:"jsonp",
		success:function(data){
			$(".detail-i-info").html("<p><span>￥"+ data[0].discount* data[0].price*0.1 +"</span><span>灰色短袖</span></p><p>市场价：<span>￥"+data[0].price+"</span><span>" + data[0].discount + "折</span><span>323人购买</span></p>")
			$(".detail-i-bimg").attr("src",data[0].goodsListImg);
			$(".detail-d-bimg").attr("src",JSON.parse(data[0].imgsUrl));
			$(".detail-d-info-l").html(data[0].detail);
			for (var i=0;i<$(".swiper-slide").length;i++) {
				$(".swiper-slide img").eq(i).attr("src",JSON.parse(data[0].goodsBenUrl)[i]);
			}
		},
	});
})


function getlocation(){
	var url = window.location.href;
	var paramstr = url.substring(url.indexOf("?")+ 1);
	var pms = paramstr.split("&");
	var obj = {};
	for (var i = 0; i < pms.length; i++) {
		if (pms[i].indexOf("=") < 0) {
			obj[pms[i]] = "undefined";
		} else {
			var pa = pms[i].split("=");
			obj[pa[0]] = pa[1];
		}
	}
	return obj;
}

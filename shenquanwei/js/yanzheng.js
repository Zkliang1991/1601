$(function() {
	$(".ty").on("touchstart", function() {
		var dat={
			'status':'register',
			'userID':$(".inp-text").eq(0).val(),
			'password':$(".inp-text").eq(1).val(),
		};
		$.ajax({
			type: "get",
			url: "http://datainfo.duapp.com/shopdata/userinfo.php",
			data: dat,
			success: function(daa) {
				if (daa==1) {
					window.location.href="login.html";
				} else{
					$(".tycw").css("display","block");
				}
			},
		});
	})
	$(".dl").on("touchstart", function() {
		var datt={
			'status':'login',
			'userID':$(".inp-text").eq(0).val(),
			'password':$(".inp-text").eq(1).val(),
		};
		$.ajax({
			type: "get",
			url: "http://datainfo.duapp.com/shopdata/userinfo.php",
			data: datt,
			success: function(da) {
				if (da.length>2) {
					da=JSON.parse(da);
					localStorage.setItem("userID",da.userID)
					window.location.href="user.html?userID="+da.userID;
				}else if(da==0){
					$(".jg").html("用户名不存在！")
				}else if(da==2){
					$(".jg").html("用户名或密码错误！")
				}
			},
		});
	});
	
	if(getlocation().userID||localStorage.getItem("userID")){
		$(".userinfo span").html(getlocation().userID||localStorage.getItem("userID"));
		$(".dengl,.zhuc").hide();
		$(".userhead").attr("src",getlocation().userimg_url);
	}
	
	
	
	if(localStorage.getItem("userID")){
		var userid={
			'userID':localStorage.getItem("userID"),
		};
		
		$.ajax({
			type: "get",
			url: "http://datainfo.duapp.com/shopdata/getCar.php",
			data: userid,
			dataType:"jsonp",
			success: function(da) {
				if (da==0) {
					$(".emptycar").css("display","block");
					$(".notempty").css("display","none");
				}
				else{
					$(".emptycar").css("display","none");
					$(".notempty").css("display","block");
					$(".car-foods").html('<li goodsID='+da[0].goodsID+'><div><img src="'+da[0].goodsListImg+'" /></div><div class="nm"><p class="car-foods-name">'+da[0].goodsName+'<a href="" class="iconfont">&#xe63a;</a></p><p class="car-foods-price">单价：<span>￥'+da[0].price+'</span><span class="daxiao"> L </span></p><p class="car-foods-count">数量：<a href="javascript:;" class="countjian">-</a><input type="text" value="'+da[0].number+'"><a href="javascript:;"class="countjia">+</a></p></div></li>');
				}
			},
		});
	}
	
	
	
	
})
onload=function(){
	$(".countjian").on("touchstart", function() {
		var gid=$(this).parent().parent().parent().attr("goodsid");
		var num=$(this).next().val();
		tongbu(gid,num,'+');
	});
	$(".countjia").on("touchstart", function() {
		var gid=$(this).parent().parent().parent().attr("goodsid");
		var num=$(this).prev().val();
		tongbu(gid,num,'-');
	})
	
}

function tongbu(goodsid,num,j){
	var userinf={
		'userID':localStorage.getItem("userID"),
		'goodsID':goodsid,
		'number': j=="+"? --num : ++num,
	};
	$.ajax({
		type: "get",
		url: "http://datainfo.duapp.com/shopdata/updatecar.php",
		data: userinf,
		success: function(da) {
			if(da==0){
				console.log("cuowu");
			}else if(da==1){
				$(".car-foods-count input").val(num);
			}
		},
	});
}



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
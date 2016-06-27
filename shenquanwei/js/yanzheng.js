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
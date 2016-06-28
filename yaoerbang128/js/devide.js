var flag = 1;
$(".devide .main").on("click",'.list',function(e){
			var e = e||event;
			e.preventDefault();
			$(this).children("ul").toggle();
			if(flag){
				$(this).find("span").first().html("&#xe652;");
			}
			else{
				$(this).find("span").first().html("&#xe61a;");
			}
			flag = !flag;
		})
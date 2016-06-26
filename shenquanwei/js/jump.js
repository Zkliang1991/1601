setTimeout(function(){
	$('html').animate({"opacity":0.2},2000,function(){
		if(localStorage.getItem("haveread")==1){
			window.location.href="htmls/main.html";
		}else{
			console.log(localStorage.getItem("haveread"));
			window.location.href="htmls/swiper.html";
		}
		
	});
},1400);

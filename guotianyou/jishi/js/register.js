
	readheadfoot()
	//加载头尾部
	function readheadfoot(){
		$("#footer").load("footer.html",function(){
			$(".home").on("click",function(){
				window.location.href = "in.html";
			})
			$(".type").on("click",function(){
				window.location.href = "sortout.html";
			})
			$(".shopping").on("click",function(){
				window.location.href = "myCart.html";
			})
			$(".own").on("click",function(){
				window.location.href = "myShow.html";
			})
			$(".more").on("click",function(){
				window.location.href = "more.html";
			})
		
		});
	}
	
	


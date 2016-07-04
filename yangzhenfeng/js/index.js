var myswiper=new Swiper(".swiper-container",{
		
		//autoplay:2000,  
		loop:true,		
		initialSlide:0,  
		direction:"horizontal" , 
		speed:500,
		autoplayDisableOnInteraction:false,  
		
		pagination:'.swiper-pagination',
		paginationClickable:true, 
			
});
$.ajax({
	url:"http://datainfo.duapp.com/shopdata/getBanner.php",
	type:"get",
	dataType:"jsonp",
	success:function(data){
		console.log(data);
		getData(data);
	},
	error:function(){
		console.log("ajax请求banner数据失败");
	}
})
function getData(data){
	console.log(typeof data)
	
	var num=1;
	for(var i=0;i<data.length;i++){
		var src=JSON.parse(data[i].goodsBenUrl)[0];
		$(".img"+num).attr("src",src);
		num++;
	}
}

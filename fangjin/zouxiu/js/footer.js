$('.btm-list ul').on('tap','li',function(){
	$(this).addClass('active').siblings().removeClass('active');
})

<<<<<<< HEAD
=======
<<<<<<< HEAD
// $('.btm-list ul').on('tap','li',function(){
// 	var index=$(this).index() ;
// 	var key=("htmlType_"+index) ;
// 	alert(typeof key);
// 	window.location.href=localStorage.key+".html";
// });

=======
>>>>>>> 0c508d2b37dbbc9dbe8ca4cf282edeec00ea8915
>>>>>>> 3157549bb0ee72b36633a0c580607321e4d63388
$('.btm-list ul li').eq(0).on('tap',function(){
	window.location.href=localStorage.htmlType_0+".html";
})
$('.btm-list ul li').eq(1).on('tap',function(){
	window.location.href=localStorage.htmlType_1+".html";
})
$('.btm-list ul li').eq(2).on('tap',function(){
	window.location.href=localStorage.htmlType_2+".html";
})
$('.btm-list ul li').eq(3).on('tap',function(){
	window.location.href=localStorage.htmlType_3+".html";
})
$('.btm-list ul li').eq(4).on('tap',function(){
	window.location.href=localStorage.htmlType_4+".html";
})
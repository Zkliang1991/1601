$('.btm-list ul').on('tap','li',function(){
	$(this).addClass('active').siblings().removeClass('active');
})

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
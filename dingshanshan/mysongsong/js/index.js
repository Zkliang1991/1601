//banner轮播图
var myswiper1=new Swiper('#myswiper1',{
	autoplay:1000,
	loop:true,
	pagination:'.swiper-pagination',
	paginationClickable:true,
	paginationBulletRender: function (index, className) {
		return '<span class="' + className +'"/>'+'</span>';
		}
})
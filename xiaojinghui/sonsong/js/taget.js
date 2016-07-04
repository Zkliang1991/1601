//<li class='home iconfont' >&#xf004a;<br/><span>首页</span></li>
//			<li class='type iconfont'>&#xe6cc;<br/><span>活动</span></li>
//			<li class='shopping iconfont'>&#xe618;<br/><span>订单</span></li>
//			<li class='own iconfont'>&#xe605;<br/><span>消息</span></li>
define(["jquery.min"],function(){
	$('.home').on('click',function(){
		window.location.href = "index.html"
	})
	$('.own').on('click',function(){
		window.location.href = "html/user.html"
	})
	
})
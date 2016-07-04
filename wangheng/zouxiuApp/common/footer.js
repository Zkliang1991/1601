/*
* @Author: Administrator
* @Date:   2016-06-27 19:49:37
* @Last Modified by:   Administrator
* @Last Modified time: 2016-06-27 20:53:38
*/
onload=function(){
	$('footer').on('tap','.l1',function(){
    	location.href = 'index.html'
    })
	$('.l2').tap(function(){
		location.href = 'fenlei.html'
	})
	$('.l3').tap(function(){
		location.href = 'shoppingcar.html'
	})
	$('.l4').tap(function(){
		location.href = 'myinfomation.html'
	})
	$('.l5').tap(function(){
		location.href = 'more.html'
	})
}
    
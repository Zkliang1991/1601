define(function(require,exports,module){
	require('swiper.min');
	require('echarts.min');
	// 定义P对象
	console.log()
	var P = {
		_init:function(){
			P.initswiper();
			
		}
		initswiper:function(){
					var myswiper = new Swiper('.swiper-container',{
					// loop:true,
					speed:2000,
					autoplay:1000,
					onSlideChangeEnd:function(swiper){
						if(swiper.activeIndex=="1"){
							P.initechart();
						}
					}
				})
					// P.initechart();
		},
		initechart:function(){
			console.log('echart')
			var main = document.getElementById('myechart');
			var chart = echarts.init(main);
			var option = {
				title:{
					text:'郑州'
				},
				xAxis:[1,2,3,4,5,6,7],
				series:{
					name:"性性",
					type:'bar',
					data:[100,200,150,123,160,198,110]
				}
			}

			chart.setOption(option)

		}
	}
	// 对外提供整个接口
	module.exports = {
		init:P.init
	}
}
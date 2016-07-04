require('./zepto.min');
require('./zepto-tap');
require('./jquery-1.8.3.js');
var thisScroll=require('./iscroll');
var myScroll,
	pullDownEl, pullDownOffset,_maxScrollY,
	pullUpEl, pullUpOffset,
	generatedCount = 0;
function pullDownAction () {
	setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
	
		// for (i=0; i<3; i++) {
		// 	var oLi = $('#thelist li').first().clone();
		// 	if(oLi.hasClass('active')){
		// 		oLi.removeClass('active');
		// 	}
		// 	$('#thelist').prepend(oLi);
		// }
		myScroll.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
	}, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
}

function pullUpAction () {
	setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production
		
		getData()

		myScroll.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
	}, 2000);	// <-- Simulate network congestion, remove setTimeout from production!
}
// getData()

function getData(){
	$.ajax({
		url:'http://datainfo.duapp.com/shopdata/getGoods.php',
		type:'get',
		dataType:'jsonp',
		success:function(jsonp){
			var l=jsonp.length;
			for (var i = 0; i < l; i++) {
				var goodsName=jsonp[i].goodsName;
				var goodsListImg=jsonp[i].goodsListImg;
				var price= jsonp[i].price;
				var discount =jsonp[i].discount;
				var id=jsonp[i].goodsID;

				var Yprice=parseInt(price/discount*10 );
				if(discount==0){
					Yprice=price;
				}
				


				var oLi=$('#thelist li').first().clone(true);
				oLi.find('.buycar').attr('data-info',goodsName);
				oLi.find('.buycar').attr('data-img',goodsListImg);
				oLi.find('.buycar').attr('data-id',id);
				oLi.find('.buycar').attr('data-price',price);

				oLi.find('.pic').find('img').attr('src',goodsListImg);
				oLi.find('.txt').find('p').find('span').html(goodsName);
				oLi.find('.price').find('span').eq(0).find('b').html( price);
				oLi.find('.price').find('span').eq(1).html(Yprice);
				oLi.find('.price').find('span').eq(2).html( discount+'折');
				$('#thelist').append(oLi);
			}
			
		
			myScroll.refresh();	
		}
	})
}









function loaded() {
	pullDownEl = document.getElementById('pullDown');
	pullDownOffset = pullDownEl.offsetHeight;
	// console.log(pullDownOffset)
	pullUpEl = document.getElementById('pullUp');
	pullUpOffset = pullUpEl.offsetHeight;



	myScroll = new thisScroll.iScroll('wrapper', {
		useTransition: true,       //是否使用css 变形
		topOffset: pullDownOffset,   //已经滚动的基准值
		onRefresh: function () {
			// console.log(maxScrollY)
			
			
            _maxScrollY = this.maxScrollY = this.maxScrollY + pullUpOffset;
            // console.log(this.maxScrollY)
			if (pullDownEl.className.match('loading')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
			} else if (pullUpEl.className.match('loading')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载更多...';
			}
		},
		onScrollMove: function () {
			// console.log(this);
			// console.log(this.maxScrollY)
			// y:滚动垂直初始位置 (负值)
			if (this.y > 5 && !pullDownEl.className.match('flip')) {
				pullDownEl.className = 'flip';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '松开刷新...';  //松开刷新
				// console.log(this.minScrollY)
				this.minScrollY = 0;
				
			} else if (this.y < 5 && pullDownEl.className.match('flip')) {

				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
				this.minScrollY = -pullDownOffset;
			} else if (this.y <= (_maxScrollY - pullUpOffset) && !pullUpEl.className.match('flip')) {
				pullUpEl.className = 'flip';
				// debugger;
				// console.log(this.y);
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '松开刷新...';
                this.maxScrollY = this.maxScrollY - pullUpOffset;
			} else if (this.y > (_maxScrollY - pullUpOffset) && pullUpEl.className.match('flip')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载更多...';
                this.maxScrollY = this.maxScrollY + pullUpOffset;
                console.log(this.y+"up")
			}
		},
		onScrollEnd: function () {
			if (pullDownEl.className.match('flip')) {
				pullDownEl.className = 'loading';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';
				pullDownAction();	// Execute custom function (ajax call?)
			} else if (pullUpEl.className.match('flip')) {
				// debugger;
				pullUpEl.className = 'loading';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
				pullUpAction();	// Execute custom function (ajax call?)
			}
		}
	});

setTimeout(function () { document.getElementById('wrapper').style.left = '0'; }, 800);
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);

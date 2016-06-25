onload=function(){
	pullDownAction();
}
var myScroll,
	pullDownEl, pullDownOffset, _maxScrollY,
	pullUpEl, pullUpOffset,
	generatedCount = 0;

function pullDownAction() {
	setTimeout(function() { // <-- Simulate network congestion, remove setTimeout from production!
		var el, li, i;
		el = document.getElementById('thelist');
		$.ajax({
			url: "http://datainfo.duapp.com/shopdata/getGoods.php",
			method: "get",
			dataType: "jsonp",
			success: function(datas) {
				for (var i = 0 in datas) {
					$('<li goodsid="' + datas[i].goodsID + 'classid=' + datas[i].classID + '"><dl><dt><img src="' + datas[i].goodsListImg + '"/></dt><dd><h3>' + datas[i].goodsName + '</h3><div><span>￥' + datas[i].price * datas[i].discount / 10 + '</span><span>￥' + datas[i].price + '</span><span>' + datas[i].discount + '折</span></div><a href=""><img src="../img/gwc.png" /></a></dd></dl></li>').prependTo("#thelist");
				}
			}
		});

		myScroll.refresh(); // Remember to refresh when contents are loaded (ie: on ajax completion)
	}, 1000); // <-- Simulate network congestion, remove setTimeout from production!
}

function pullUpAction() {
	setTimeout(function() { // <-- Simulate network congestion, remove setTimeout from production!
		var el, li, i;
		el = document.getElementById('thelist');

		$.ajax({
			url: "http://datainfo.duapp.com/shopdata/getGoods.php",
			method: "get",
			dataType: "jsonp",
			data: {
				linenumber:4
			},
			success: function(datas) {
				for (var i = 0 in datas) {
					$('<li goodsid="' + datas[i].goodsID + 'classid=' + datas[i].classID + '"><dl><dt><img src="' + datas[i].goodsListImg + '"/></dt><dd><h3>' + datas[i].goodsName + '</h3><div><span>￥' + datas[i].price * datas[i].discount / 10 + '</span><span>￥' + datas[i].price + '</span><span>' + datas[i].discount + '折</span></div><a href=""><img src="../img/gwc.png" /></a></dd></dl></li>').appendTo("#thelist");
				}
				myScroll.refresh(); 
			}
		});

		// Remember to refresh when contents are loaded (ie: on ajax completion)
	}, 1000); // <-- Simulate network congestion, remove setTimeout from production!
}

function loaded() {
	pullDownEl = document.getElementById('pullDown');
	pullDownOffset = pullDownEl.offsetHeight;
	pullUpEl = document.getElementById('pullUp');
	pullUpOffset = pullUpEl.offsetHeight;

	myScroll = new iScroll('wrapper', {
		useTransition: true, //是否使用css 变形
		topOffset: pullDownOffset, //已经滚动的基准值
		onRefresh: function() {
			//myScroll.maxScrollXmyScroll.maxScrollY
			// 当滚动到底部时的 myScroll.x/y
			$.each($('ul li'), function(index) {
				//					$(this).html(index+1)
			})
			_maxScrollY = this.maxScrollY = this.maxScrollY + pullUpOffset;
			if (pullDownEl.className.match('loading')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
			} else if (pullUpEl.className.match('loading')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载更多...';
			}
		},
		onScrollMove: function() {
			// y:滚动垂直初始位y置 (负值)
			if (this.y > 5 && !pullDownEl.className.match('flip')) {
				pullDownEl.className = 'flip';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '松开刷新...'; //松开刷新
				// console.log(this.minScrollY)
				this.minScrollY = 0;

			} else if (this.y < 5 && pullDownEl.className.match('flip')) {

				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
				this.minScrollY = -pullDownOffset;
			} else if (this.y <= (_maxScrollY - pullUpOffset) && !pullUpEl.className.match('flip')) {
				pullUpEl.className = 'flip';
				// debugger;
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '松开刷新...';
				this.maxScrollY = this.maxScrollY - pullUpOffset;
			} else if (this.y > (_maxScrollY - pullUpOffset) && pullUpEl.className.match('flip')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载更多...';
				this.maxScrollY = this.maxScrollY + pullUpOffset;
			}
		},
		onScrollEnd: function() {
			if (pullDownEl.className.match('flip')) {
				pullDownEl.className = 'loading';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';
				pullDownAction(); // Execute custom function (ajax call?)
			} else if (pullUpEl.className.match('flip')) {
				// debugger;
				pullUpEl.className = 'loading';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
				pullUpAction(); // Execute custom function (ajax call?)
			}
		}
	});

	setTimeout(function() {
		document.getElementById('wrapper').style.left = '0';
	}, 800);
}

document.addEventListener('touchmove', function(e) {
	e.preventDefault();
}, false);

document.addEventListener('DOMContentLoaded', function() {
	setTimeout(loaded, 200);
}, false);
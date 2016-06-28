

var myScroll,
	pullDownEl, pullDownOffset,_maxScrollY,
	pullUpEl, pullUpOffset,
	generatedCount = 0;

function pullDownAction () {
	setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
		var el, li, i;
		el = document.getElementById('thelist');

		for (i=0; i<2; i++) {
			li = document.createElement('li');
			// li.innerText = 'Generated down ' + (++generatedCount);
			// el.insertBefore(li, el.childNodes[0]);
			$.ajax({
				url:'http://datainfo.duapp.com/shopdata/getGoods.php',
				type:'get',
				dataType:'jsonp',
				success:function(data){
					for( var i=0;i<2;i++){
						var name = data[i].goodsName;
					    var discounts = data[i].discount;
					    var img = data[i].goodsListImg;
					    var prices = data[i].price; 
					    $('#thelist').append('<li><dl><dt><img src='+img+'></dt><dd><span>'+name+'</span><p>¥<b>'+prices+'</b></p><i>'+discounts+'折</i></dd></dl><div><span class="iconfont">&#xe607;</span></div></li>')
					}
				}
			})
		}

		myScroll.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
	}, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
}

function pullUpAction () {
	setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
		var el, li, i;
		el = document.getElementById('thelist');

		for (i=0; i<1; i++) {
			li = document.createElement('li');
			// li.innerText = 'Generated up ' + (++generatedCount);
			// el.appendChild(li, el.childNodes[0]);
			$.ajax({
				url:'http://datainfo.duapp.com/shopdata/getGoods.php',
				type:'get',
				dataType:'jsonp',
				success:function(data){
					for( var i=0;i<1;i++){
						var name = data[i].goodsName;
					    var discounts = data[i].discount;
					    var img = data[i].goodsListImg;
					    var prices = data[i].price; 
					    $('#thelist').append('<li><dl><dt><img src='+img+'></dt><dd><span>'+name+'</span><p>¥<b>'+prices+'</b></p><i>'+discounts+'折</i></dd></dl><div><span class="iconfont">&#xe607;</span></div></li>')
					}
				}
			})
		}

// 03	ajax({
// 04	url:"RemoteInterface.cgi",
// 05	method:"get",
// 06	data:{pageIndex:pageIndex},
// 07	callback:callback
// 08	});

		myScroll.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
	}, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
}

function loaded() {
	pullDownEl = document.getElementById('pullDown');
	pullDownOffset = pullDownEl.offsetHeight;
	console.log(pullDownOffset)
	pullUpEl = document.getElementById('pullUp');
	pullUpOffset = pullUpEl.offsetHeight;
	console.log(pullUpOffset)


	myScroll = new iScroll('wrapper', {
		useTransition: true,       //是否使用css 变形
		topOffset: pullDownOffset,   //已经滚动的基准值
		onRefresh: function () {
			// console.log(maxScrollY)
            _maxScrollY = this.maxScrollY = this.maxScrollY + pullUpOffset;
            console.log(this.maxScrollY)
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
			console.log(this.maxScrollY)
			// y:滚动垂直初始位置 (负值)
			if (this.y > 5 && !pullDownEl.className.match('flip')) {
				pullDownEl.className = 'flip';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '松开刷新...';  //松开刷新
				// console.log(this.minScrollY)
				this.minScrollY = 0;
				
			} else if (this.y < 5 && pullDownEl.className.match('flip')) {
				debugger;
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
				this.minScrollY = -pullDownOffset;
			} else if (this.y <= (_maxScrollY - pullUpOffset) && !pullUpEl.className.match('flip')) {
				pullUpEl.className = 'flip';
				// debugger;
				console.log(this.y);
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

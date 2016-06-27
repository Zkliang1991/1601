var myScroll,
	pullDownEl, pullDownOffset,_maxScrollY,
	pullUpEl, pullUpOffset,
	generatedCount = 0;

function pullDownAction () {
	setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
		var el, li, i;
		el = document.getElementById('thelist');

		for (i=0; i<3; i++) {
			li = document.createElement('li');
			li.innerText = 'Generated down ' + (++generatedCount);
			el.insertBefore(li, el.childNodes[0]);
		}
		//刷新myscroll
		myScroll.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
	}, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
}

function pullUpAction () {
	setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
		var el, li, i;
		el = document.getElementById('thelist');

		for (i=0; i<3; i++) {
			li = document.createElement('li');
			li.innerText = 'Generated up ' + (++generatedCount);
			el.appendChild(li, el.childNodes[0]);
		}

// 03	ajax({
// 04	url:"RemoteInterface.cgi",
// 05	method:"get",
// 06	data:{pageIndex:pageIndex},
// 07	callback:callback
// 08	});
// 把加载更多的接口写在这里

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

	//初始化scroll  
	myScroll = new iScroll('wrapper', {
		useTransition: true,       //是否使用css 变形
		topOffset: pullDownOffset,   //已经滚动的基准值
		hideScrollbar:true,          //表示用户没有操作scroll时会隐藏滚动条
		fadeScrollbar:true,
		//表示滚动条重新 刷新 
		onRefresh: function () {
			//this  ==>scroll
			console.log(this);
			console.log(this.maxScrollY)
			//this.maxScrollY 表示滚动到底部的距离  (定值前提是scroll不加载更多)
			//myScroll.maxScrollX  myScroll.maxScrollY
			// 当滚动到底部时的 myScroll.x/y
            _maxScrollY = this.maxScrollY = this.maxScrollY + pullUpOffset;
            console.log(this.maxScrollY)
            //match
			if (pullDownEl.className.match('loading')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
			} else if (pullUpEl.className.match('loading')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载更多...';
			}
		},
		//表示滚动条开始滑动
		onScrollMove: function () {
			// console.log(this.y);
			// console.log(this.maxScrollY)
			// y:滚动条距离垂直初始位置 (负值)
			if (this.y > 5 && !pullDownEl.className.match('flip')) {
				// debugger;
				pullDownEl.className = 'flip';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '松开刷新...';  //松开刷新
				// console.log(this.minScrollY)
				this.minScrollY = 0;
				
			} else if (this.y < 5 && pullDownEl.className.match('flip')) {
				// debugger;
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
				this.minScrollY = -pullDownOffset;
				console.log(this.minScrollY);
			} else if (this.y <= (_maxScrollY - pullUpOffset) && !pullUpEl.className.match('flip')) {
				pullUpEl.className = 'flip';
				// debugger;
				console.log(this.y);
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '松开刷新...';
                this.maxScrollY = this.maxScrollY - pullUpOffset;
                console.log(this.maxScrollY)
			} else if (this.y > (_maxScrollY - pullUpOffset) && pullUpEl.className.match('flip')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载更多...';
                this.maxScrollY = this.maxScrollY + pullUpOffset;
                console.log(this.y+"up")
			}
		},
		//表示滚动条滑动结束时候
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

//处理浏览器默认事件
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
//当 DOM 元素 已经加载好内容后执行
document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);
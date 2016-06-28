var myScroll,
	pullDownEl, pullDownOffset,_maxScrollY,
	pullUpEl, pullUpOffset,
	generatedCount = 0;
function pullDownAction () {
	setTimeout(function () {	
		var el, li, i,j;
		el = document.getElementById('thelist');
		$.ajax({
				url:"http://datainfo.duapp.com/shopdata/getGoods.php",
				type:"get",
				dataType:"jsonp",
				success:function(data){
					getData(data,i,j,li,el);
				}
			})	
	}, 1000);	
}

function pullUpAction () {
	setTimeout(function () {	
		var el, li, i,j;
		el = document.getElementById('thelist');
		$.ajax({
				url:"http://datainfo.duapp.com/shopdata/getGoods.php",
				type:"get",
				dataType:"jsonp",
				success:function(data){
					getData(data,i,j,li,el);
				}
			})	
	}, 1000);			
}

function getData(dat,i,j,li,el){
			for (i=0; i<3; i++) {
				li = document.createElement('li');
				li.className = "list";
				j = Math.floor(Math.random()*10);
				console.log(j);
				var discount = dat[j].discount;
				var goodsListImg = dat[i].goodsListImg;
				var goodsName = dat[j].goodsName;
				var price = dat[j].price;
				var goodsID = dat[j].goodsID;
				li.setAttribute("data-goods",goodsID);
				li.innerHTML = "<img src='"+goodsListImg+"' alt=''><ul><li>"+goodsName+"</li><li>￥"+price+"</li><li>"+discount+"折</li><button class='iconfont' type='button'  id='cart-in'>&#xe632;</button></ul>";
				el.appendChild(li, el.childNodes[0]);
			}
			myScroll.refresh();	
		}


function loaded() {
	pullDownEl = document.getElementById('pullDown');
	pullDownOffset = pullDownEl.offsetHeight;
	console.log(pullDownOffset)
	pullUpEl = document.getElementById('pullUp');
	pullUpOffset = pullUpEl.offsetHeight;
	console.log(pullUpOffset)


	myScroll = new iScroll('wrapper', {
		useTransition: true,       
		topOffset: pullDownOffset,   
		onRefresh: function () {
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
			console.log(this.y);
			console.log(this.maxScrollY)
			if (this.y > 5 && !pullDownEl.className.match('flip')) {
				pullDownEl.className = 'flip';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '松开刷新...'; 
				this.minScrollY = 0;
				
			} else if (this.y < 5 && pullDownEl.className.match('flip')) {

				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
				this.minScrollY = -pullDownOffset;
			} else if (this.y <= (_maxScrollY - pullUpOffset) && !pullUpEl.className.match('flip')) {
				pullUpEl.className = 'flip';

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
				pullDownAction();	
			} else if (pullUpEl.className.match('flip')) {
				pullUpEl.className = 'loading';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
				pullUpAction();	
			}
		}
	});

setTimeout(function () { document.getElementById('wrapper').style.left = '0'; }, 800);
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);
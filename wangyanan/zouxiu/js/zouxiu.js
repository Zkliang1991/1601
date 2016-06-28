var myswiper=new Swiper(".swiper-container",{
		
		autoplay:1000,
		loop:true,
		resistanceRatio:0,
		pagination:'.swiper-pagination',
		paginationClickable:true,
		
	})
var myScroll,
	pullDownEl, pullDownOffset,_maxScrollY,
	pullUpEl, pullUpOffset,
	generatedCount = 0;
function loaded() {
	pullDownEl = document.getElementById('pullDown');
	pullDownOffset = pullDownEl.offsetHeight;
	// console.log(pullDownOffset)
	pullUpEl = document.getElementById('pullUp');
	pullUpOffset = pullUpEl.offsetHeight;
	// console.log(pullUpOffset)
//创建scroll对象
	myScroll = new iScroll('wrapper', {
		useTransition: true,       //是否使用css 变形
		topOffset: pullDownOffset,   //已经滚动的基准值
		onRefresh: function () {
			// $.each($('ul li'),function(index){
			// 	$(this).html(index+1)
			// })
			// console.log(maxScrollY)
			// $("#thelist").on('click','p',function(){
			// 	$(this).css('color','green');
			// })
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
			console.log(this.maxScrollY)
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
	function getBanner(){
		$.ajax({
			url: 'http://datainfo.duapp.com/shopdata/getBanner.php',
			type:'GET',
			dataType:"jsonp",
			success:function(data){
				console.log(data);
				setbanner(data);
				
			},
			error: function(){
				alert("加载错误");
			}
		})
	}
getBanner();
	function getData() {
		
		$.ajax({
			url: 'http://datainfo.duapp.com/shopdata/getBanner.php',
			type:'GET',
			dataType:"jsonp",
			success:function(data){
				console.log(data);
				
				setgoods(data);
				 myScroll.refresh();
			},
			error: function(){
				alert("加载错误");
			}
		})
	}
	getData();

	function setbanner(data){		
			var l=data.length;
				console.log(l);
				for (var i=0;i<data.length;i++) {
					var str=data[i].goodsBenUrl;
					console.log(data);
					var arry=str.split(',');
					var imgurl=arry[0];
					imgurl=imgurl.substring(2,imgurl.length-1);
					$('.swiper-slide img').eq(i+1).attr('src',imgurl);
					if(i==0) {
						$('.swiper-slide img').eq(data.length+1).attr('src',imgurl);
					}
					if(i==(data.length-1)) {
						$('.swiper-slide img').eq(0).attr('src',imgurl);
					}
					//console.log(imgurl);
				}
	}
	function setgoods(data){
		for (var i=0;i<data.length;i++){
				console.log(data[i].goodsName);
				var gname=data[i].goodsName;
				var str=data[i].goodsBenUrl;
					//console.log(data);
					var arry=str.split(',');	
					
					if(arry[1].indexOf(']')!=-1){
						console.log(111);
						arry[1] = arry[1].split(']')[0]
					}
					console.log(arry[1]);		
					var imgsrc=arry[1].substring(1,arry[1].length-1);
					//console.log(imgsrc);
					$('#thelist').append("<li><dl><dt><img src="+imgsrc+"></dt><dd><a>"+gname+"</a><b>$600</b><span>6000</span><p>0折</p><div class='iconfont'>&#xe618;</div></dd></dl></li>")

		}
		

	}
//上面下拉刷新
function pullDownAction () {
	setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
		
	 myScroll.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
	}, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
}
//下面上拉加载
function pullUpAction () {
	setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
		
		getData();
				// Remember to refresh when contents are loaded (ie: on ajax completion)
	}, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
}


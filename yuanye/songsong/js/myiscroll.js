require('./zepto.min');
require('./zepto-tap');
// require('./scroll');  跟myiscroll重复了

// 		iscroll是个对象 （上拉，下拉菜单）
var thisScroll = require('./iscroll');


var myScroll,
	pullDownEl, pullDownOffset,_maxScrollY,
	pullUpEl, pullUpOffset,
	generatedCount = 0;


function loaded() {
	pullDownEl = document.getElementById('pullDown');
	pullDownOffset = pullDownEl.offsetHeight;
	console.log(pullDownOffset)
	pullUpEl = document.getElementById('pullUp');
	pullUpOffset = pullUpEl.offsetHeight;
	console.log(pullUpOffset)


	myScroll = new thisScroll.iScroll('wrapper', {
		useTransition: true,       //是否使用css 变形
		topOffset: pullDownOffset,   //已经滚动的基准值

		onRefresh: function () {
			//myScroll.maxScrollXmyScroll.maxScrollY
			// 当滚动到底部时的 myScroll.x/y
			//console.log(this.maxScrollY)
			//$.each($('ul li'),function(index){
			//		$(this).html(index+1)
			//	})
			$('#thelist').on('tap','li',function(){
				$(this).addClass('active').siblings().removeClass('active');
			});
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
			//console.log(this.y);
			//console.log(this.maxScrollY)
			// y:滚动垂直初始位y置 (负值)
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
				//console.log(this.y);
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '松开刷新...';
                this.maxScrollY = this.maxScrollY - pullUpOffset;
			} else if (this.y > (_maxScrollY - pullUpOffset) && pullUpEl.className.match('flip')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载更多...';
                this.maxScrollY = this.maxScrollY + pullUpOffset;
                //console.log(this.y+"up")
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
function getData(){
	$.ajax({
		url:'http://datainfo.duapp.com/shopdata/getGoods.php',
		type:"GET",
		dataType:'jsonp',
		success:function(data){
			console.log(data);
			console.log(111);
			for(var i = 0;i<3;i++){
				var src = data[i].goodsListImg;
				var text = data[i].goodsName;
				var goodsIDs = data[i].goodsID;
				var oldVal = data[i].price;
				var discount = data[i].discount;
				// 默认的价钱是原价
				var value = data[i].price;
				// 有折扣，打折
				if(discount!=0){
					value = oldVal*discount/10;
				}
				$('#thelist').append('<li><div class="Quintroduce" data-ID='+goodsIDs+'><img src='+src+'></div><div><h3 class="Quintroduce" data-ID='+goodsIDs+'>'+text+'</h3><div><b>￥'+value+'</b><span>￥'+oldVal+' </span><p>'+discount+'折</p></div><p class="iconfont InShopCar" data-ID='+goodsIDs+'>&#xe60d;</p></div></li>');
			}
			// $('#thelist').find('li').first().addClass('active').siblings().removeClass('active');
			myScroll.refresh();

			$('.Quintroduce').on('click',function(){
				console.log($(this).attr('data-ID'));
				var dataIDss = $(this).attr('data-ID');
				if (window.location.href.split('?').length>1) {
					var userIDs = window.location.href.split('?')[1].split('=')[1];
					window.location.href = 'introduce.html?userID='+userIDs+'&dataID='+dataIDss;
				}else{
					window.location.href = 'introduce.html?dataID='+dataIDss;
				}
			})

			$('.InShopCar').on('click',function(){
				if (window.location.href.split('userID=').length>1 ) {
					var userID = window.location.href.split('&')[0].split('userID=')[1];
					console.log(userID);
					// console.log( $(this).attr('data-ID') );
					var dataID =  $(this).attr('data-ID') 
					console.log(dataID)
					$.ajax({
						url:'http://datainfo.duapp.com/shopdata/updatecar.php',
						type:'get',
						data:{'userID':userID,'goodsID':dataID,'number':1},
						success:function(data){
							console.log(data);
							if(data==1){
								console.log('1就是购物车数据传上去了')
							}
						}
					})
				}else{
					alert('请登录账号');
				}
			})

		}
	})
	
	// $.ajax({
	// 	url:'../json/index.json',		//相对于页面
	// 	type:"GET",
	// 	success:function(data){
	// 		var l = data.length;
	// 		for(var i = 0;i<l;i++){
	// 			var src = data[i].src;
	// 			var text = data[i].text;
	// 			var value = data[i].value;
	// 			var oldVal = data[i].oldVal;
	// 			var discount = data[i].discount;
	// 			$('#thelist').append('<li><div><img src='+src+'></div><div><h3>'+text+'</h3><div><b>'+value+'</b><span>'+oldVal+' </span><p>'+discount+'</p></div><p class="iconfont">&#xe60d;</p></div></li>');
	// 		}
	// 		// $('#thelist').find('li').first().addClass('active').siblings().removeClass('active');
	// 		myScroll.refresh();
	// 	}
	// })
};
getData();

function pullDownAction () {
	setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
		var el, li, i;
		el = document.getElementById('thelist');

		getData();
		console.log("上拉菜单");

		// if(generatedCount>=6){
		// 	generatedCount = 0;
		// }
		// generatedCount++;
		// console.log(generatedCount)
		// for (i=0; i<4; i++) {
		// 	li = document.createElement('li');
		// 	li.innerText = 'Generated down ' + (++generatedCount);
		// 	el.insertBefore(li, el.childNodes[0]);
		// }

				// Remember to refresh when contents are loaded (ie: on ajax completion)
	}, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
}

function pullUpAction () {
	setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
		getData();
		console.log("下拉菜单");
		// var el, li, i;
		// el = document.getElementById('thelist');

		// for (i=0; i<3; i++) {
		// 	li = document.createElement('li');
		// 	// li.innerText = 'Generated up ' + (++generatedCount);
		// 	el.appendChild(li, el.childNodes[0]);
		// }

// 03	ajax({
// 04	url:"RemoteInterface.cgi",
// 05	method:"get",
// 06	data:{pageIndex:pageIndex},
// 07	callback:callback
// 08	});

				// Remember to refresh when contents are loaded (ie: on ajax completion)
	}, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
}
setTimeout(function () { document.getElementById('wrapper').style.left = '0'; }, 800);
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);


require('./zepto.min');
require('./zepto-tap');

//获取数据
getDataByLocal()
function getDataByLocal(){
		var mycount=0;
		var reg = /^goodsTy-/
		var mydata=[];
		for (var i = 0; i < localStorage.length; i++) {
			var localkey=localStorage.key(i);

			if(reg.test(localkey)){
				var listData=JSON.parse(localStorage.getItem(localkey));

				mycount+=listData.buysCount;
				
				mydata.push(listData)
			}
			
		}
		// $('.showNum').html(mycount)	
		console.log(mydata)
		setDataInHtml(mydata)
	}

function setDataInHtml(mydata){
	for (var i = 0; i < mydata.length; i++) {
		var $id=mydata[i].id;
		var $img = mydata[i].img;
		var $info = mydata[i].info;
		var $price = mydata[i].price;
		var $type = mydata[i].goodType;
		var $count = mydata[i].buysCount;

	 $('.content ul').append("<li><dl><dt><img src="+$img+" alt=''></dt><dd><div class='title'>"+$info+"<em></em></div><div class='price'>单价：<span>￥<b>"+$price+"</b></span></div><div class='count'><p>数量：</p><p>"+$count+"</p><p>取消订单</p></div></dd></dl></li>")	

    }
}
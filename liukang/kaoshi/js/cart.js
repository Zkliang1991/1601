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
			}else{
				alert('购物车为空')
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
		// var $type = mydata[i].goodType;
		var $count = mydata[i].buysCount;


		 $('.content ul').append("<li><dl><dt><img src="+$img+"></dt><dd><div class='title'>"+$info+"<em></em></div><div class='price'>单价：<span>￥<b>"+$price+"</b></span><em></em></div><div class='count' data-type=goodsTy-"+$id+"><p>数量：</p><p><span class='reduce'>-</span><input type='text'value="+$count+" ><span class='add'>+</span></p></div></dd></dl></li>") 

    }
}

//加
add();
function add(){
	$('.add').on('click',function(){
		var Vlu=$(this).parent().find('input').val();
		Vlu++;
		$(this).parent().find('input').val(Vlu);




		var thisType = $(this).parent().parent().attr('data-type');
    		var localData=JSON.parse(localStorage.getItem(thisType))
    		 localData.buysCount=Vlu;
    		localStorage.setItem(thisType,JSON.stringify(localData))
    		addCount()	 
	})
};


 //减
reduce();
function reduce(){
	
	$('.reduce').on('click',function(){
		var Vlu=$(this).parent().find('input').val();
		if(Vlu>1){
			Vlu--;
			$(this).parent().find('input').val(Vlu);

			var thisType = $(this).parent().parent().attr('data-type');
    		var localData=JSON.parse(localStorage.getItem(thisType))
    		 localData.buysCount=Vlu;
    		localStorage.setItem(thisType,JSON.stringify(localData))
    		addCount()
		}
		
			 
	})
}




//去逛逛
$('.go').on('tap',function(){
	window.location.href='sort.html'
})

//结算
$('.jiesuang').on('tap',function(){
	window.location.href='order.html'
})


$(".title em").on('tap',function(){
	$(this).parent().parent().parent().parent().remove();
	$id=$(this).parent().parent().find('.count').attr("data-type")
	console.log($id);
	var localKey =$id;
	localStorage.removeItem(localKey);
				addCount()
})


addCount()	 
function addCount(){
	var reg=/^goodsTy-/;
	var mycount=0;
	for (var i = 0; i < localStorage.length; i++) {
		var localkey=localStorage.key(i);

		if(reg.test(localkey)){
			var myData=JSON.parse(localStorage.getItem(localkey))
			
			mycount+=myData.buysCount

		}
	}

		$('.car-num').html(mycount);
		$('.num span').html(mycount)
}	 
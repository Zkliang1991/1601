	require('./zepto.min');
	require('./zepto-tap');
// // 	// function testusername(){
// // 	// 	var reg=/^1[3|5|7|8|9]\d{9}$/;
// // 	// 	if($('.user input').val()==''|| undefined){
// // 	// 		$('.user b').html('请输入账号').addClass('active1')
// // 	// 	}
// // 	// }
	



// 去注册
login()
function login(){
	$('.login').on('tap',function(){
		window.location.href='login.html';
	})
}








// function Data(username,pwd){
// 	var Mydata={
// 	'status':'register',
// 	'userID':username,
// 	'password':pwd
// 	};

// 	$.ajax({
// 		url:'http://datainfo.duapp.com/shopdata/userinfo.php',
// 		type:'post',
// 		data:Mydata,
// 		// dataType:'jsonp',
// 		success:function(data){
			
// 			console.log(data)
// 			if(data==0){
// 				$('.user b').html('用户重名')
// 			};
// 			if(data==1){
// 				$('.user b').addClass('acyove2')
// 				console.log(2)
// 			}
// 		},
// 		error:function(){
// 			console.log(222);
// 		}
// 	})
// }
// // ;

// $('.btn').on('tap',function(){
// 	console.log(11)
// 	var User=$('.user input').val();
// var Pwd=$('.password input').val()
// 	// console.log(User)
// 	// console.log(11)
// 	Data(User,Pwd)
// })


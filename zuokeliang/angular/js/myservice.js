define(function(require,exports,module){
	require('angular.min');
	var P = {
		_init:function(){
			P.initAngular();
		},
		initAngular:function(){
			console.log('angular');
			var app = angular.module('myApp',[])
			.service('myservice',function(){
				this.func = function(x,y){
					return Math.pow(x,y);
				},
				this.setInter = function(time){setInterval(function(){
					console.log(time);
					},1000)
				},
				this.upper  =function(str){
					return angular.uppercase(str);
					// return str.uppercase()
				}
			})
			.service('toStringService',function(){
				this.myFunc = function(a,b){
					return a.toString(b);
				}
			})
			.filter('myFormat',['toStringService',function(mystring){
				 return function(e,b){
				 	return mystring.myFunc(e,b);
				 }
			}])
			.controller("myCtrl",function($scope,$location,$timeout,$interval,myservice){
				$scope.url = "xxxxx";
				$scope.absUrl = $location.absUrl(); //absUrl()表示取地址
				$scope.protocol = $location.protocol() //协议
				$scope.port = $location.port();    //端口
				$scope.host = $location.host();		//主机
				$scope.hash = $location.hash();
				$scope.sayFormHeart = "welcome to 郑州！";
				$timeout(function(){
					$scope.sayFormHeart = "my name is zuokeliang";
					$timeout(function(){
						$scope.sayFormHeart = 'I am woring in zhengzhou now';
						$timeout(function(){
							$scope.sayFormHeart = "I  very love my clever students!";
							$timeout(function(){
								$scope.sayFormHeart = "I wish and truely think they will get a goog job!"
							},2000)
						},2000)
					},2000)
				},2000)
				$interval(function(){
					var now = new Date();
					$scope.now = now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
				},1000)
				// $scope.number = Math.pow(3,5);
				$scope.number = myservice.func(3,6);
				// myservice.setInter();
				$scope.mystr = "zklssAAAAss";
				// $scope.mystr =  angular.uppercase($scope.thisStr);
				
				// $scope.$apply(function($scope,myservice){
				// 	myservice.upper($scope.mystr);
				// })
				//监听事件
				$scope.$watch(function(){
					$scope.mystr = myservice.upper($scope.mystr);
				})
			})
		}
	}
	module.exports = {
		init:P._init
	}
})
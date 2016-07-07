define(function(require,exports,mod){
	require('angular.min');
	require('angular-route.min');
	//定义P对象
	var P = {
		_init:function(){
			P.initAngular();		
		},
		initAngular:function(){
			console.log('angular')
			var app = angular.module("myApp",['ngRoute'])
			.config(['$routeProvider',function($routeProvider){
				$routeProvider
					.when('/',{template:'欢迎 welcome!!!'})
					.when('/html5',{template:"这是HTML5的学习天堂"})
					.when('/ios',{template:"ios你到底还行不行啊"})
					.when('/android',{template:"android兄我看好你哦!!!"})
					.otherwise({redirectTo:'/'});
			}])
			.controller('myCtrl',function($scope){

			})
		},
	}
	//对外提供整个接口
	mod.exports = {
		init:P._init
	}
})


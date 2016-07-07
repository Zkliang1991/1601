define(function(require,exports,module){
	require('angular.min');
	var P = {
		_init:function(){
			P.initAngular();
		},
		initAngular:function(){
			var app = angular.module("myApp",[])
			.service('myservice',function(){
				return {
					checkUpCase:function(input){
						if(!input){
							return input;
						}
					var output = '';  //转换为字符串
						for(var i=0;i<input.length;i++){
							//toUpperCase() 把所有的字母变成大写
							if(i>0&&input[i]==input[i].toUpperCase()){
								output = output + ' ';
							}
							output = output + input[i];
						}
						return output; 
					}
				}
			})
			.filter('upper',['myservice',function(a){
					return function(e){
						return a.checkUpCase(e);
					}
			}])
			.controller('myCtrl',function($scope,myservice){
				// $scope.myclick = function(input){
				// 	console.log(input)
				// 	// sssH;
				// 	// 0 input[0] = s  output = ''+s = 's';
				// 	// 1 input[1] = s  output = "s"+s = 'ss';
				// 	// 2 input[2] = s  output = "ss"+s = 'sss';
				// 	// 3 input[3] = H  output = 'sss'  output='sss' + ' '='sss 'output='sss '+H='sss H';
				// 	if(!input){
				// 		return input;
				// 	}
				// 	var output = '';  //转换为字符串
				// 	for(var i=0;i<input.length;i++){
				// 		//toUpperCase() 把所有的字母变成大写
				// 		if(i>0&&input[i]==input[i].toUpperCase()){
				// 			output = output + ' ';
				// 		}
				// 		output = output + input[i];
				// 	}
				// 	$scope.resultStr = output; 
				// }

				$scope.myclick = function(input){
					$scope.resultStr = myservice.checkUpCase(input);
				}
			})
		}
	}
	module.exports = {
		init:P._init
	}
})
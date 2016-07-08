var myModule = angular.module('myModule', [])
	.controller("redColourController", function($scope, $rootScope) {
		$rootScope.rootScopeColour = "这里是RootScope的颜色";
		$scope.redColour = "这里是红色";
	})
	.controller("greenColourController", function($scope) {
		$scope.greenColour = "这里是绿色";
	})
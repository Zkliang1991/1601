var myApp = angular.module('myModule', []);

myApp.controller('myController', function($scope, $anchorScroll, $location, $http) {
	$http.get('http://localhost:8888/angular/province.json').then(function(response) {
		$scope.provinces = 	response.data;
	})

	$scope.scrollTo = function(provinceName) {
		$location.hash(provinceName);
		$anchorScroll.yOffset = 20;
		$anchorScroll();
	}
})
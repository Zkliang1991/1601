var myApp = angular.module('myModule', []);

myApp.controller('myController', function($scope, $anchorScroll, $location) {

	$scope.scrollTo = function(scrollLocation){
		$location.hash(scrollLocation);
		$anchorScroll();
	}

})
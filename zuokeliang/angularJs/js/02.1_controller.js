var myApp = angular.module('myModule', []);

var myController = function($scope){
	$scope.message = "AngularJs tutorial";
};

myApp.controller("myController",myController);
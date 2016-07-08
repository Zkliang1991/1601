var myApp = angular.module('myModule', []);

myApp.controller("myController",function($scope){
	var employee = {firstName:"Fang",lastName:"vane",gender:"Male"};
	
	$scope.employee = employee;
});

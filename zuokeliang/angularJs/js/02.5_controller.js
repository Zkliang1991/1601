var myApp = angular.module('myModule', []).
controller("myController",function($scope){
	var employee = {firstName:"Fang",lastName:"vane",gender:"Male"};
	$scope.employee = employee;
});

var myApp = angular.module('myModule', []);

myApp.controller("myController", function($scope,$http) {
	$http.get('http://localhost:8888/angular/employee.cfm')
	.then(function(response){
		$scope.employees = response.data;
	},function(error){
		console.log(error);
	})
	
});
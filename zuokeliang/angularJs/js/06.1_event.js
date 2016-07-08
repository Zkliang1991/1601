var myApp = angular.module('myModule', []);

myApp.controller("myController", function($scope) {
	var employees = [{
		firstName: "Fang",
		lastName: "vane",
		gender: "Male",
		likes:0,
		disLikes:0
	}, {
		firstName: "Sara",
		lastName: "rose",
		gender: "Female",
		likes:0,
		disLikes:0
	}, {
		firstName: "Mark",
		lastName: "bear",
		gender: "Male",
		likes:0,
		disLikes:0
	}, {
		firstName: "Pam",
		lastName: "hot",
		gender: "Male",
		likes:0,
		disLikes:0
	}]
	$scope.employees = employees;
	
	$scope.incrementLikes = function(employee){
		employee.likes++;
	}
	
	$scope.incrementDisLikes = function(employee){
		employee.disLikes++;
	}
});
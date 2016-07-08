var myApp = angular.module('myModule', []);

myApp.controller("myController", function($scope) {
	var employees = [{
		firstName: "Fang",
		lastName: "vane",
		gender: "Male"
	}, {
		firstName: "Sara",
		lastName: "rose",
		gender: "Female"
	}, {
		firstName: "Mark",
		lastName: "bear",
		gender: "Male"
	}, {
		firstName: "Pam",
		lastName: "hot",
		gender: "Male"
	}]
	$scope.employees = employees;
	$scope.viewTemplate = "14.2.1_template.html";
});
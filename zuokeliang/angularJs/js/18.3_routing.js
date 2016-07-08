var myModule = angular.module('myModule', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider
			.when("/home", {
				templateUrl: "Templates/18/home.html",
				controller: "homeController"
			})
			.when("/courses", {
				templateUrl: "Templates/18/courses.html",
				controller: "coursesController"
			})
			.when("/employees", {
				templateUrl: "Templates/18/employees.html",
				controller: "employeesController"
			})
			.when("/employees/:id", {
				templateUrl: "Templates/18/employeedetail.html",
				controller: "employeeDetailController"
			})
			.otherwise({
				redirectTo: "/home"
			})
	})
	.controller('homeController', function($scope) {
		$scope.message = "Home page";
	})
	.controller('coursesController', function($scope) {
		$scope.courses = ["Android", "Ios", "Html5", "Java"];
	})
	.controller('employeesController', function($scope, $http) {
		$http.get('http://localhost:8888/angular/employee.cfm').then(function(response) {
			$scope.employees = response.data;
		})
	})
	.controller('employeeDetailController', function($scope, $http, $routeParams, $log, $timeout) {
		//本处示例了$log与$timeout的操作
		$log.error($routeParams)
		$log.info($routeParams)
		//timeout 调用方法1
		$timeout(callAtTimeout, 3000);

		//timeout 调用方法2 利用$scope的调用方式
		$scope.callAtTimeout = function() {
			console.log("$scope.callAtTimeout - Timeout occurred");
		}
		

		$timeout(function() {
			$scope.callAtTimeout();
		}, 1000);

		$http({
			url: "http://localhost:8888/angular/employeedetail.cfm",
			params: {
				id: $routeParams.id
			},
			method: "get"
		}).then(function(response) {
			console.log(response)
			$scope.employee = response.data[0];
		})
	});
function callAtTimeout() {
	console.log("Timeout occurred");
}
var myModule = angular.module('myModule', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider.caseInsensitiveMatch = true;

		$routeProvider
			.when("/home", {
				templateUrl: "Templates/25.1/home.html",
				controller: "homeController",
				controllerAs: "homeCtrl"
			})
			.when("/courses", {
				templateUrl: "Templates/25.1/courses.html",
				controller: "coursesController",
				controllerAs: "coursesCtrl",
				caseInsensitiveMatch: true
			})
			.when("/employees", {
				templateUrl: "Templates/25.1/employees.html",
				controller: "employeesController",
				controllerAs: "employeesCtrl"
			})
			.when("/employeesSearch/:firstname?", {
				templateUrl: "Templates/25.1/employeesSearch.html",
				controller: "employeesSearchController",
				controllerAs: "employeesSearchCtrl"
			})
			.when("/employees/:id", {
				templateUrl: "Templates/25.1/employeedetail.html",
				controller: "employeeDetailController",
				controllerAs: "employeeDetailCtrl"
			})
			.otherwise({
				redirectTo: "/home"
			})
	})
	.controller('homeController', function() {
		this.message = "Home page";
	})
	.controller('coursesController', function() {
		this.courses = ["Android", "Ios", "Html5", "Java"];
	})
	.controller('employeesController', function($http, $route, $location) {
		var vm = this;
		vm.employeeSearch = function() {
			if (vm.firstname)
				$location.url("/employeesSearch/" + vm.firstname)
			else
				$location.url("/employeesSearch")
		}

		vm.reloadData = function() {
			$route.reload();
		}

		$http.get('http://localhost:8888/angular/employee.cfm').then(function(response) {
			// 注意在http里，我们能够使用this吗？这个this它将指向谁呢？
			// this.employees = response.data;
			vm.employees = response.data;
		})
	})
	.controller("employeesSearchController", function($http, $routeParams) {
	var vm = this;

	if ($routeParams.firstname) {
		$http({
			url: "http://localhost:8888/angular/employeesearch.cfm",
			method: "get",
			params: {
				firstname: $routeParams.firstname
			}
		}).then(function(response) {
			vm.employees = response.data;
		})
	} else {
		$http.get("http://localhost:8888/angular/employee.cfm")
			.then(function(response) {
				vm.employees = response.data;
			})
	}
})

.controller('employeeDetailController', function($http, $routeParams) {
	var vm = this;
	$http({
		url: "http://localhost:8888/angular/employeedetail.cfm",
		params: {
			id: $routeParams.id
		},
		method: "get"
	}).then(function(response) {
		vm.employee = response.data[0];
	})
});
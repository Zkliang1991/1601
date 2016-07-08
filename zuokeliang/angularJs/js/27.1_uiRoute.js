var myModule = angular.module('myModule', ['ui.router'])
	.config(function($stateProvider) {

		$stateProvider
			.state("home", {
				url:"/home",
				templateUrl: "Templates/27.1/home.html",
				controller: "homeController",
				controllerAs: "homeCtrl"
			})
			.state("courses", {
				url:"/courses",
				templateUrl: "Templates/27.1/courses.html",
				controller: "coursesController",
				controllerAs: "coursesCtrl"
			})
			.state("employees", {
				url:"/employees",
				templateUrl: "Templates/27.1/employees.html",
				controller: "employeesController",
				controllerAs: "employeesCtrl",
				resolve: {
					employeeslist: function($http) {
						return $http.get("http://localhost:8888/angular/employee.cfm")
							.then(function(response) {
								return response.data;
							})
					}
				}
			})
	})
	.controller('homeController', function() {
		this.message = "Home page";
	})
	.controller('coursesController', function() {
		this.courses = ["Android", "Ios", "Html5", "Java"];
	})
	.controller('employeesController', function(employeeslist, $state, $location) {
		var vm = this;

		vm.reloadData = function() {
			$state.reload();
		}

		vm.employees = employeeslist;
	});
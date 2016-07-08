var myModule = angular.module('myModule', ['ui.router'])
	.config(function($stateProvider) {

		$stateProvider
			.state("home", {
				url: "/home",
				templateUrl: "Templates/27.2/home.html",
				controller: "homeController",
				controllerAs: "homeCtrl"
			})
			.state("courses", {
				url: "/courses",
				templateUrl: "Templates/27.2/courses.html",
				controller: "coursesController",
				controllerAs: "coursesCtrl"
			})
			.state("employees", {
				url: "/employees",
				templateUrl: "Templates/27.2/employees.html",
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
			.state("employeeDetail", {
				url: "/employees/:id",
				templateUrl: "Templates/27.2/employeedetail.html",
				controller: "employeeDetailController",
				controllerAs: "employeeDetailCtrl"
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
	})
	.controller('employeeDetailController', function($http, $stateParams) {
		var vm = this;
		$http({
			url: "http://localhost:8888/angular/employeedetail.cfm",
			params: {
				id: $stateParams.id
			},
			method: "get"
		}).then(function(response) {
			vm.employee = response.data[0];
		})
	});
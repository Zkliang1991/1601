var myApp = angular.module('myModule', []);

myApp.controller("myController", function($scope) {
	var employees = [{
		firstName: "Fang",
		lastName: "vane",
		gender: "Male",
		salary: 12333.496,
		birthday: new Date('2007-7-11')
	}, {
		firstName: "Sara",
		lastName: "rose",
		gender: "Female",
		salary: 232334.23,
		birthday: new Date('1997-2-3')
	}, {
		firstName: "Mark",
		lastName: "bear",
		gender: "Male",
		salary: 68000,
		birthday: new Date('1968-03-22')
	}, {
		firstName: "Aam",
		lastName: "hot",
		gender: "Male",
		salary: 66880.5,
		birthday: new Date('1986-3-4')
	}]

	$scope.employees = employees;
	$scope.sortColumn = "firstName";
	$scope.reverseSort = false;

	$scope.sortData = function(column) {
		$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
		$scope.sortColumn = column;
		console.log($scope.reverseSort)
	}

	$scope.getSortClass = function(column) {
		if ($scope.sortColumn == column) {
			return $scope.reverseSort ? "arrow-down" : "arrow-up";
		}
	}

	$scope.search = function(item) {
		if ($scope.searchText == undefined) {
			return true;
		} else {
			if (item.firstName.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 
			|| item.lastName.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
				return true;
			}
		}

		return false;
	}
});
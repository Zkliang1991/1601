var myApp = angular.module('myModule', []);

myApp.controller('myController', function($scope) {

	$scope.transformString = function(input) {
		if (!input) {
			return input;
		}

		var output = "";

		for (var i = 0; i < input.length; i++) {
			if (i > 0 && input[i] == input[i].toUpperCase()) {
				output = output + " ";
			}

			output = output + input[i];
		}

		$scope.output = output;

	}

})
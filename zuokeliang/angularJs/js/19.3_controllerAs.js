var myApp = angular.module('myModule', [])
	.controller("countryController", function() {
		this.name = "中国";
	})
	.controller("stateController", function() {
		this.name = "浙江";
	})
	.controller("cityController", function() {
		this.name = "金华";
	});
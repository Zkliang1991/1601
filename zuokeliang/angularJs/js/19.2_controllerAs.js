var myApp = angular.module('myModule', [])
.controller("countryController", function ($scope) {
    $scope.name = "中国";
})
.controller("stateController", function ($scope) {
    $scope.name = "浙江";
})
.controller("cityController", function ($scope) {
    $scope.name = "金华";
});
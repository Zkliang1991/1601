var myApp = angular.module('myModule', []);

myApp.controller("myController", function($scope) {

    var provinces = [{
        name: "浙江",
        cities: [{
            name: '金华'
        }, {
            name: '杭州'
        }, {
            name: '温州'
        }, ]
    }, {
        name: "湖北",
        cities: [{
            name: '武汉'
        }, {
            name: '襄樊'
        }, {
            name: '黄冈'
        }, ]
    }, {
        name: "江苏",
        cities: [{
            name: '南京'
        }, {
            name: '徐州'
        }, {
            name: '连云港'
        }, ]
    }];

    $scope.provinces = provinces;
});

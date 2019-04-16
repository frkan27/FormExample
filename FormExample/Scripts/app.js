/// <reference path="angular.js" />

var app = angular.module("app", []);

app.directive("userCard", function () {
    return {
        restrict: 'EAC',
        templateUrl: '/Index.cshtml'
    };
});
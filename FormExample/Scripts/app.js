﻿/// <reference path="angular.js" />

var app = angular.module("myapp", []);

app.directive("userCard", function () {
    return {
        restrict: 'EAC',
        templateUrl: '/Index.cshtml'
    };
});
app.controller("KisiCtrl", function ($scope) {
    
    $scope.kisiler = [];
    $scope.formgöster = false;

    function init() {
        var data = JSON.parse(localStorage.getItem("kisiler"));
        $scope.kisiler = data === null ? [] : data;
    }
    $scope.eklegoster = function () {
        console.log($scope.formgoster);
        $scope.formgoster = !$scope.formgoster;
    }
    $scope.ekle = function () {
        $scope.kisiler.push({
            id: guid(),
            Ad: $scope.yeni.adi,
            Soyad: $scope.yeni.soyadi,
            Yas: $scope.yeni.yasi
        });
        $scope.yeni.Ad = "";
        $scope.yeni.Soyad = "";
        $scope.yeni.Yas = "";
        localStorage.setItem("kisiler", JSON.stringify($scope.kisiler));
    };
    function guid() {
        function S4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }

        // then to call it, plus stitch in '4' in the third group
        return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
    }
    init();
})
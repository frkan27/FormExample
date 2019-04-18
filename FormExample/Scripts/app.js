/// <reference path="angular.js" />

var app = angular.module("myapp", []);

app.directive("userCard", function () {
    return {
        restrict: 'EAC',
        templateUrl: '/Index.cshtml'
    };
});
app.controller("KisiCtrl", function ($scope) {
    
    $scope.kisiler = [];
    $scope.formgoster = false;

    function init() {
        var data = JSON.parse(localStorage.getItem("kisiler"));
        $scope.kisiler = data === null ? [] : data;
    }
    $scope.eklegoster = function () {
        
        $scope.formgoster = !$scope.formgoster;
    }
    $scope.ekle = function () {
        $scope.kisiler.push({
            id: guid(),
            adi: $scope.yeni.adi,
            soyadi: $scope.yeni.soyadi,
            yasi: $scope.yeni.yasi
        });
        $scope.yeni.adi = "";
        $scope.yeni.soyadi = "";
        $scope.yeni.yasi = "";
        localStorage.setItem("kisiler", JSON.stringify($scope.kisiler));
        $scope.formgoster = false;
    };
    $scope.sil = function (id) {
        for (var i = 0; i < $scope.kisiler.length; i++) {
            var data = $scope.kisiler[i];
            if (id === data.id) {
                $scope.kisiler.splice(i, 1);
                break;
            }
        }
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
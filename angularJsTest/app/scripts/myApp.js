/**
 * Created by Samuel on 02.04.2016.
 */
var myApp = angular.module('angularJsTestApp', [])

myApp.controller("headerCtrl", function($scope){
    $scope.text = "Test";
    $scope.age = 0;
    $scope.majeurOrMineur = function(){
        return ($scope.age >= 18) ? "majeur" : "mineur";
    };
});
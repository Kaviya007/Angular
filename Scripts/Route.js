/// <reference path="angular.min.js" />

var app = angular
    .module("Demo", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/Home", {
                templateUrl: "Templates/Home.html",
                controller: "homeController",
                controllerAs: "homeCtrl",
                caseInsensitiveMatch: true
            })
            .when("/Courses", {
                templateUrl: "Templates/Courses.html",
                controller: "coursesController as coursesCtrl",
                
                caseInsensitiveMatch: true
            })
            .when("/Students", {
                templateUrl: "Templates/Students.html",
                controller: "studentsController as studentsCtrl",
                caseInsensitiveMatch: true
            })
            .when("/Students/:id", {
                templateUrl: "Templates/StudentDetails.html",
                controller: "studentDetailsController as studentDetailsCtrl",
                caseInsensitiveMatch: true
            })
            .otherwise({
                redirectTo: "/home"
            })
        $locationProvider.html5Mode(true);
    })
    .controller("homeController", function ($scope) {
        $scope.message = "Home Page";
    })
    .controller("coursesController", function ($scope) {
        $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
    })
    .controller("studentsController", function ($scope, $http) {
        $http.get("StudentService.asmx/GetAllStudents")
            .then(function (response) {
                $scope.students = response.data;
            })
    })

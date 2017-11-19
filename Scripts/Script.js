/// <reference path="angular.js" />
/// <reference path="angular-route.min.js" />

var app = angular.module("Demo", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.
        when("/", {
            templateUrl: "Views/page1.html",
            controller: "page1Controller"
        }).
        when("/page1", {
            templateUrl: "Views/page1.html",
            controller: "page1Controller"
        }).
        when("/page2", {
            templateUrl: "Views/page2.html",
            controller: "page2Controller"
        }).
        when("/ApiData", {
            templateUrl: "Views/ApiData.html",
            controller: "ApiDataController"
        }).
        when("/Template", {
            templateUrl: "Views/Template.html",
            controller: "myController"
        }).
        when("/backToList", {
            templateUrl: "Views/Template.html",
            controller: "myController"
        }).
        when("/learner/:id", {
            templateUrl: "Views/Learnerdetails.html",
            controller: "myController"
        }).
        otherwise({
            redirectTo: "/"
        });
        //$locationProvider.html5Mode(true).hashPrefix('!');
        // $locationProvider.hashPrefix('!');
    });

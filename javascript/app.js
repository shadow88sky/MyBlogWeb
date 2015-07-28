//路由模块
var app = angular.module('app', ['ngRoute', 'ngSanitize']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/index/:label?', { templateUrl: '../view/blog.html', controller: blogController}).
            when('/blog/:id', { templateUrl: '../view/blogContent.html', controller: blogContentController}).
            otherwise({ redirectTo: '/index/:label?' });
    }]);
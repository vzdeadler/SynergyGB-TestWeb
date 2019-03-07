(function(){
    
    'use strict';

    var app = angular.module('test-web', [
        'ngRoute', 
        'login', 
        'login_services', 
        'home', 
        'home_services'
    ]);

    app.config(function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: './src/login/login.html'
        })
        .when('/home/:CID', {
            templateUrl: './src/home/home.html'
        });
    });

})();
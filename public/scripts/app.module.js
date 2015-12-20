'use strict';
(function () {
    var app = angular.module('app',
        ['ngRoute', 'ngAnimate', 'ngNotify', 'app.login', 'app.layout', 'app.service']
    );

    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/static/templates/service-view.html'
            })
            .when('/login', {
                templateUrl: '/static/templates/login.html',
                controller: 'LoginController'
            })
            .when('/logout', {
                templateUrl: '/static/templates/login.html',
                controller: 'LogoutController'
            })
            .when('/edit/:serviceId', {
                templateUrl: '/static/templates/service-edit.html',
                controller: 'ServiceEditController'
            });

        $locationProvider.html5Mode(true);
    });

    app.run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {
        $rootScope.$on('$routeChangeStart', function () {
            if (!Auth.isLoggedIn()) {
                $location.path('/login');
            }
        });
    }]);
})();
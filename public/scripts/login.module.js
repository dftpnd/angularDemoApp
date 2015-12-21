'use strict';
(function () {
    var module = angular.module('app.login', ['ngStorage']);

    module.controller('LoginController', function (Auth) {
        var self = this;
        this.email = 'admin';
        this.password = 'admin';
        this.error = false;

        this.errorHandler = function () {
            self.error = true;
        };

        this.authorization = function () {
            Auth.login(this.email, this.password, this.errorHandler)
        };
    });

    module.controller('LogoutController', function (Auth) {
        Auth.logout();
    });


    module.service('Auth', function ($http, $location, $localStorage) {
        var self = {};
        var localStorage = $localStorage.$default({
            loggedIn: false
        });

        self.login = function (email, password, callback) {
            $http({
                method: 'GET',
                data: {
                    email: email,
                    password: password
                },
                url: '/static/data/auth.json'
            }).then(function successCallback(response) {
                var res = response.data;
                if (res.email === email && res.password === password) {
                    localStorage.loggedIn = true;
                    $location.path('/');
                } else {
                    callback(response);
                }
            });
        };

        self.logout = function () {
            localStorage.loggedIn = false;
        };

        self.isLoggedIn = function () {
            return localStorage.loggedIn;
        };

        return self;
    });


})();
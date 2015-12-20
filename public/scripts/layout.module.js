'use strict';
(function () {
    var module = angular.module('app.layout', []);

    module.controller('LayoutController', function (Auth) {
        this.isUserLoggedIn = function () {
            return Auth.isLoggedIn();
        }
    });


})();
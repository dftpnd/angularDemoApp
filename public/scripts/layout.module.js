'use strict';
(function () {
    var module = angular.module('app.layout', []);

    module.controller('LayoutController', function (Auth, ngNotify) {
        this.isUserLoggedIn = function () {
            return Auth.isLoggedIn();
        };

        ngNotify.config({
            theme: 'pure',
            position: 'top',
            duration: 3000,
            type: 'info',
            sticky: false,
            button: true,
            html: false
        });
    });


})();
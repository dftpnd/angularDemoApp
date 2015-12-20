'use strict';
(function () {
    var module = angular.module('app.service', []);

    module.controller('ServiceViewController', function (Service) {

    });

    module.controller('ServiceSearchController', function (Service) {

    });

    module.controller('ServiceEditController', function (Service) {

    });

    module.controller('ServiceDeleteController', function (Service) {

    });


    module.controller('ServiceCreateController', function (Service, ngNotify) {
        this.idp = '';
        this.login = '';


        this.save = function () {
            var newService = {
                idp: this.idp,
                login: this.login
            };

            Service.create(newService).then(function (res) {
                ngNotify.set('Your notification message goes here!', 'success');
            });
        }
    });

    module.service('Service', function ($http) {
        var self = {};


        self.create = function (data) {
            return $http({
                method: 'GET',
                data: data,
                url: '/static/data/createService.json'
            })
        };

        self.update = function () {

        };

        self.delete = function () {

        };

        self.list = function () {

        };

        return self;
    });


})();
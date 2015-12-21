'use strict';
(function () {
    var module = angular.module('app.service', []);

    module.controller('ServiceViewController', function (Service) {
        this.list = function () {
            return Service.list;
        };
    });

    module.controller('ServiceSearchController', function ($scope, Service, $filter) {
        var self = this;
        this.searchType = '';
        this.searchQuery = '';
        this.search = function () {
            var query = {};
            if (!this.searchType || !this.searchQuery) {
                Service.getList();
            } else {
                query[this.searchType] = this.searchQuery;
                Service.list = $filter('filter')(Service.list, query);
            }

        };


    });


    module.controller('ServiceDeleteController', function (Service, ngNotify) {
        this.serviceIdp = '';
        this.list = function () {
            return Service.list;
        };
        this.delete = function () {
            Service.delete(this.serviceIdp).then(function () {
                ngNotify.set('Сервис удален', 'info');
            });
        };
    });


    module.controller('ServiceCreateController', function (Service, ngNotify) {
        var self = this;
        this.form = {};
        this.form.id = new Date().getTime();
        this.form.idp = 0;
        this.form.login = '';
        this.form.email = '-';
        this.form.balance = 0;
        this.clearForm = function () {
            self.form.idp = '';
            self.form.login = '';
        };
        this.save = function () {
            var data = angular.extend({}, this.form);
            Service.create(data).then(function (res) {
                ngNotify.set('Сервис создан', 'success');
                self.clearForm();
            });
        };
    });

    module.service('Service', function ($http, $filter) {
        var self = {};
        self.list = [];
        self.create = function (data) {
            return $http({
                method: 'GET',
                data: data,
                url: '/static/data/createService.json'
            }).then(function () {
                self.list.push(data);
            });
        };

        self.delete = function (idp) {
            return $http({
                method: 'GET',
                data: {idp: idp},
                url: '/static/data/deleteService.json'
            }).then(function () {
                self.list = $filter('filter')(self.list, {idp: '!' + idp});
            });
        };

        self.getList = function () {
            $http({
                method: 'GET',
                url: '/static/data/serviceList.json'
            }).then(function (res) {
                self.list = res.data;
            })
        };

        self.getList();

        return self;
    });


})();
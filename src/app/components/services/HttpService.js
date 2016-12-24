(function () {
    'use strict';

    angular.module('app')
            .service('HttpService', ['$http',
                HttpService
            ]);

    function HttpService($http) {

        this.getPatientList = function () {
            return $http({
                method: 'GET',
                url: 'http://www.api.cardiacare.ru/patients',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            }).success(function (data) {
                return data;
            }).error(function () {
                alert("error");
                return null;
            });

        };

    }
})();


(function () {
    'use strict';

    angular.module('app')
        .service('AuthService', ['$http', '$base64',
            AuthService
        ]);

    function AuthService($http, $base64) {
        var _token;
        var _isAuthorized = false;

        function setToken(aToken) {
            /*
             * Server side authentication is a little bit stupid
             * So the workflow is following:
             * We get token using /tokens request
             * Our token is (suddenly!) is new login
             * Basic auth requires login and password encoded with base64 / e.g. base64(login:password) /
             * As we don't have a password we just concatenate our token and ":"
             */
            $http.defaults.headers.common = {"Access-Control-Request-Headers": "accept, origin, authorization"};
            $http.defaults.headers.common.Authorization = 'Basic ' + $base64.encode(aToken + ":");
            _token = aToken;
            _isAuthorized = true;
        }

        this.login = function (credentials) {
            return $http({
                method: 'POST',
                url: 'http://api.cardiacare.ru/tokens',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                data: credentials
            }).then(function (response) {
                setToken(response.data);
            }, function (response) {
                console.log('Error occured');
            });
        };

        this.logout = function () {
            /**
             * DELETE token
             * SET isAuthorized to null
             */
        };

        this.isAuthorized = function () {
            return _isAuthorized;
        };
    }
})();
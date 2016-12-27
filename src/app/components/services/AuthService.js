(function () {
    'use strict';

    angular.module('app')
        .service('AuthService', ['$http', '$base64', "$cookies",
            AuthService
        ]);

    function AuthService($http, $base64, $cookies) {

        function setToken(aToken) {
            /*
             * Server side authentication is a little bit stupid
             * So the workflow is following:
             * We get token using /tokens request
             * Our token is (suddenly!) is new login
             * Basic auth requires login and password encoded with base64 / e.g. base64(login:password) /
             * As we don't have a password we just concatenate our token and ":"
             */
            // $http.defaults.headers.common = {"Access-Control-Request-Headers": "accept, origin, authorization"};
            $http.defaults.headers.common.Authorization = 'Basic ' + $base64.encode(aToken + ":");
            $cookies.put('token', $base64.encode(aToken + ":"));
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

        this.signup = function (credentials) {
            console.log("OK");
            return $http({
                method: 'POST',
                url: 'http://api.cardiacare.ru/users',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                data: credentials
            }).then(function (response) {
                setToken(response.data);
            }, function (response) {
                console.log("Error when signup");
            });
        };

        this.logout = function () {
            if (_isAuthorized) {
                return $http.delete('http://api.cardiacare.ru/tokens')
                    .then(
                        function (response) {
                            $http.defaults.headers.common.Authorization = '';
                            $cookies.remove('token');
                        }, function (response) {
                            alert("Error when deleting token");
                        }
                    );
            } else {
                throw Error("Not authorized");
            }
        };

        this.isAuthorized = function () {
            var token = $cookies.get('token');
            var _isAuthorized = false;
            if (undefined !== token) {
                $http.defaults.headers.common.Authorization = 'Basic ' + token;
                _isAuthorized = true;
            }

            return _isAuthorized;
        };
    }
})();
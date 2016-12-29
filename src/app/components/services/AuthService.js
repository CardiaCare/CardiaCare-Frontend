(function () {
    'use strict';

    angular.module('app')
        .service('AuthService', ['$http', '$base64', "$cookies", "Restangular",
            AuthService
        ]);

    function AuthService($http, $base64, $cookies, Restangular) {

        function setToken(aToken) {
            
            
            //TODO Remove this line after migration to Restangular
            $http.defaults.headers.common.Authorization = 'Basic ' + $base64.encode(aToken + ":");
            Restangular.setDefaultHeaders({Authorization: 'Basic ' + $base64.encode(aToken + ":")});
            $cookies.put('token', aToken);
        }

        this.login = function (credentials) {
            var tokens = Restangular.all('tokens');
            return tokens.post(credentials).then(function (response) {
                setToken(response);
            }, function (response) {
                throw new Error(response.data.errors);
            });
        };

        this.signup = function (credentials) {
            var users = Restangular.all('users');
            return users.post(credentials).then(function (response) {
                setToken(response);
            }, function (response) {
                console.log("Error when signup");
            });
        };

        this.logout = function () {
            if (this.isAuthorized()) {
                var tokens = Restangular.all('tokens');
                return tokens.remove()
                    .then(
                        function (response) {
                            $http.defaults.headers.common.Authorization = '';
                            Restangular.setDefaultHeaders({Authorization: null});
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
                setToken(token);
                _isAuthorized = true;
            }
            return _isAuthorized;
        };
    }
})();
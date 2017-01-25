(function () {
    'use strict';

    angular.module('app')
        .service('AuthService', ['$http', '$base64', "$cookies", "Restangular",
            AuthService
        ]);

    function AuthService($http, $base64, $cookies, Restangular) {
        var that = this;

        this.getUser = function () {
            var user = JSON.parse($cookies.get('user'));
            return user;
        };
        this.updateUser = function () {
            var user = this.getUser();
            Restangular.one('users', user.id).get()
                .then(function (response) {
                    setUser(response);
                });

        };
        function setUser(user) {
            $cookies.put('user', JSON.stringify(user));
        }

        function setToken(aToken) {
            Restangular.setDefaultHeaders(
                {
                    Authorization: 'Basic ' + $base64.encode(aToken + ":")
                }
            );
            $cookies.put('token', aToken);
        }

        function authenticate(response) {
            setToken(response.token);
            setUser(response.user);
        }

        this.login = function (credentials) {
            var tokens = Restangular.all('tokens');
            return tokens.post(credentials).then(function (response) {
                authenticate(response);
            }, function (response) {
                throw new Error(response.data.errors);
            });
        };

        this.signup = function (credentials) {
            var users = Restangular.all('users');
            return users.post(credentials).then(function (response) {
                authenticate(response);
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
                            $cookies.remove('user');
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
            var user = $cookies.get('user');

            var _isAuthorized = false;

            if (undefined !== token && undefined !== user) {
                setToken(token);
                setUser(JSON.parse(user));
                _isAuthorized = true;
            }

            return _isAuthorized;
        };
    }
})();
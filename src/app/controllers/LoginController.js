(function () {

    angular
        .module('app')
        .controller('LoginController', ['$scope', '$rootScope', 'AuthService', 'AUTH_EVENTS',
            LoginController
        ]);

    function LoginController($scope, $rootScope, AuthService, AUTH_EVENTS) {
        var vm = this;

        vm.credentials = {};

        vm.login = function () {
            var email = vm.credentials.email;
            var password = vm.credentials.password;

            if (email === '' || password === '') {
                alert("Empty credentials");
                return;
            }
            var credentials = {email: email, password: password};
            AuthService.login(credentials).then(function () {
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            }, function () {
                $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            });
        };
    }

})();

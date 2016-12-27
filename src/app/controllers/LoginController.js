(function () {

    angular
        .module('app')
        .controller('LoginController', ['$scope', '$state', '$rootScope', 'AuthService', 'AUTH_EVENTS',
            LoginController
        ]);

    function LoginController($scope, $state, $rootScope, AuthService, AUTH_EVENTS) {
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
                $state.go('home.profile');
            }, function () {
                $state.go('home.login');
            });
        };
    }

})();

(function () {

    angular
        .module('app')
        .controller('LoginController', ['$scope', '$state', 'AuthService', 'Restangular',
            LoginController
        ]);

    function LoginController($scope, $state, AuthService, Restangular) {
        var vm = this;
        vm.credentials = {};
        vm.errors = [];
        vm.login = function () {
            var email = vm.credentials.email;
            var password = vm.credentials.password;

            if (email === '' || password === '') {
                vm.errors.push("Incorrect password or email.");
                $state.go('home.login');
            }
            var credentials = {email: email, password: password};
            AuthService.login(credentials).then(function (response) {
                $state.go('home.doctor-dashboard');
            }, function (errors) {
                //FIXME: Fix error throwing on backend (array instead of object and some standart field-names)
                vm.errors.push("Incorrect password or email.");
                $state.go('home.login');
            });
        };
    }

})();

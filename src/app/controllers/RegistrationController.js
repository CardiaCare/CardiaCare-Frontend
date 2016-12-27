(function () {

    angular
        .module('app')
        .controller('RegistrationController', ['$state', 'AuthService',
            RegistrationController
        ]);

    function RegistrationController($state, AuthService) {
        var vm = this;

        vm.credentials = {};

        vm.register = function () {
            console.log("OK!");
            AuthService.signup(vm.credentials)
                .then(function () {
                    $state.go('home.profile');
                });
        };
    }

})();


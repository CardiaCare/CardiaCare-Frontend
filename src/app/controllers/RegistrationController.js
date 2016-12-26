(function () {

    angular
        .module('app')
        .controller('RegistrationController', ['AuthService',
            RegistrationController
        ]);

    function RegistrationController(AuthService) {
        var vm = this;

        vm.credentials = {};

        vm.register = function () {
            console.log("OK!");
            AuthService.signup(vm.credentials)
                .then(function () {
                    console.log("success signup");
                });
        };
    }

})();


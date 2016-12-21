(function () {

    angular
        .module('app')
        .controller('RegistrationController', [
            RegistrationController
        ]);

    function RegistrationController() {
        var vm = this;

        vm.credentials = {};

        vm.register = function () {
            
        };
    }

})();


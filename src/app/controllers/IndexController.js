(function () {

    angular
        .module('app')
        .controller('LoginController', ['$scope','$mdDialog', '$translate', '$state', '$rootScope', 'AuthService', 'AUTH_EVENTS','$mdToast',
            LoginController
        ]);

    function LoginController($scope, $mdDialog, $translate, $state, $rootScope, AuthService, AUTH_EVENTS, $mdToast) {

        var vm = this;
    }

})();

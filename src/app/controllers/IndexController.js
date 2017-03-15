(function () {

    angular
        .module('app')
        .controller('IndexController', ['$scope','$mdDialog', '$translate', '$state', '$rootScope', 'AuthService', 'AUTH_EVENTS','$mdToast',
            IndexController
        ]);

    function IndexController($scope, $mdDialog, $translate, $state, $rootScope, AuthService, AUTH_EVENTS, $mdToast) {

        var vm = this;
    }

})();

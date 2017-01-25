(function () {

    angular
        .module('app')
        .controller('ProfileController', ['$mdSidenav', '$stateParams','$translate',
            ProfileController
        ]);

    function ProfileController($mdSidenav, $stateParams, $translate) {
        var vm = this;
    }

})();

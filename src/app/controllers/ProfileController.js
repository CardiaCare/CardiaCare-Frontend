(function () {

    angular
        .module('app')
        .controller('ProfileController', ['$mdSidenav', '$stateParams','$translate',
            ProfileController
        ]);

    function ProfileController($mdSidenav, $stateParams, $translate) {
        var vm = this;
        //FIXME
        vm.menuItems = [
            {
                name: $translate.instant('PROFILE'),
                icon: 'person',
                sref: 'home.profile({userId: ' + $stateParams.userId + '})'
            },
            {
                name: $translate.instant('BIOSIGNALS'),
                icon: 'dashboard',
                sref: 'home.biosignals({userId:' + $stateParams.userId + '})'
            }
        ];
    }

})();

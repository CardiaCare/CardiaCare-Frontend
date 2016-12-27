(function () {

    angular
        .module('app')
        .controller('ProfileController', ['navService', '$mdSidenav',
            ProfileController
        ]);

    function ProfileController(navService, $mdSidenav) {
        var vm = this;
        vm.menuItems = [];
        navService
            .loadAllItems()
            .then(function (menuItems) {
                vm.menuItems = [].concat(menuItems);
            });

    }

})();

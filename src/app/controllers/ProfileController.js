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
        vm.user = {
            email: 'contact@flatlogic.com',
            name: 'Ivan',
            patronymic: 'Ivanovich',
            surname: 'Ivanov',
            doctorName: 'Petr Petrov',
            organization: 'State Hospital',
            snils: '12345',
            inn: '09876',

            birthday: '11.12.1990',
            birthplace: 'Petrozavodsk',
            gender: 'male',

            diagnoses: 'We are young and ambitious full service design and technology company. ' +
            'Our focus is JavaScript development and User Interface design.',
            allergy: 'citruse'
        };
    }

})();

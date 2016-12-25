(function () {

    angular
        .module('app')
        .controller('PatientListController', ['$scope', 'HttpService',
            PatientListController
        ]);

    function PatientListController($scope, HttpService) {
        var vm = this;


        HttpService.getPatientList()
            .then(function (patients) {
                vm.patients = patients;
            });

        vm.patients2 = [
            {
                name: 'Ivan',
                patronymic: 'Ivanovich',
                surname: 'Ivanov'

            },
            {
                name: 'Kirill',
                patronymic: 'Kirillovich',
                surname: 'Kirillov'

            }

        ];
    }

})();



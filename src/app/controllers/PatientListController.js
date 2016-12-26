(function () {


    angular
        .module('app')
        .controller('PatientListController', ['$scope', 'HttpService',
            PatientListController
        ]);

    function PatientListController($scope, HttpService) {
        var vm = this;

        vm.patients = [];

        HttpService.getPatientList()
            .then(function (patients) {
                vm.patients = patients;
            });
   }

})();



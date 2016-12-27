(function () {


    angular
        .module('app')
        .controller('PatientListController', ['$scope', 'HttpService',
            PatientListController
        ]);

    function PatientListController($scope, HttpService) {
        $scope.patients = [];

        HttpService.getPatientList()
            .then(function (patients) {
                $scope.patients = patients;
            });

        $scope.goToPatient = function(patientId, event){
            alert(patientId);
        };
   }

})();



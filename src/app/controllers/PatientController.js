(function () {

    angular
        .module('app')
        .controller('PatientController', [
            '$scope', '$stateParams', 'Restangular', '$mdToast', '$translate', 'AuthService', '$state',
            PatientController
        ]);

    function PatientController($scope, $stateParams, Restangular, $mdToast, $translate, AuthService, $state) {
        var vm = this;
        var user = AuthService.getUser();
        $scope.patient_email = null;
        if (user.role == 'patient') {
            $scope.patient = user.person;
            $scope.patient_email = user.email;
        } else {
                Restangular.one('patients', $stateParams.userId).get()
                .then(function (response) {
                        $scope.patient = response.data;
                    },
                    function (response) {
                        if(response.status === 404){
                            $state.go('404')
                        }
                        if(response.status === 403){
                            $state.go('403')
                        }
                    });
                    
        }
 
        $scope.update = function () {
            Restangular.one('patients', $stateParams.userId).get()
                .then(function (patient) {
                    for (var property in patient.data) {
                        if ($scope.patient.hasOwnProperty(property)) {
                            patient.data[property] = $scope.patient[property];
                        }
                    }
                    return patient.data;
                })
                .then(function (editedPatient) {
                    return editedPatient.put();
                })
                .then(function (response) {
                        AuthService.updateUser();
                        $scope.showSimpleToast($translate.instant('DONE'));
                    },
                    function (errors) {
                        // TODO differrent typer of erroros
                    });
        };

        $scope.showSimpleToast = function (text) {
            $mdToast.show(
                $mdToast.simple()
                    .textContent(text)
                    .position('top right')
                    .hideDelay(3000)
            );
        };
    }

})();

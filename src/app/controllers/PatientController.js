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

        if (user.role == 'patient') {
            $scope.patient = user.person;
            $scope.patient_email = user.email;
        } else {
            Restangular.one('patients', $stateParams.userId).get()
                .then(function (response) {
                        $scope.patient = response;
                        return Restangular.one('users', response.user_id).get();
                    },
                    function (response) {
                        if(response.status === 404){
                            $state.go('404')
                        }
                        if(response.status === 403){
                            $state.go('403')
                        }
                    })
                .then(function (user) {
                    $scope.patient_email = user.email;
                });
        }


        $scope.update = function () {
            console.log("update 1");
            Restangular.one('patients', $stateParams.userId).get()
                .then(function (patient) {
                    for (var property in patient) {
                        console.log("update 2");
                        if ($scope.patient.hasOwnProperty(property)) {
                            patient[property] = $scope.patient[property];
                            console.log("update 3");
                        }
                    }
                    console.log(patient);
                    return patient;
                })
                .then(function (editedPatient) {
                    console.log("update 4");
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

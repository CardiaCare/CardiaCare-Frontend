(function () {

    angular
        .module('app')
        .controller('PatientController', [
            '$scope', '$stateParams', 'Restangular', '$mdToast', '$translate', 'AuthService',
            PatientController
        ]);

    function PatientController($scope, $stateParams, Restangular, $mdToast, $translate, AuthService) {
        var vm = this;
        var user = AuthService.getUser();

        if (user.role == 'patient') {
            $scope.user = user.person;
            $scope.patient_email = user.email;
        } else {
            Restangular.one('patients', $stateParams.userId).get()
                .then(function (response) {
                    $scope.user = response;
                    return Restangular.one('users', response.user_id).get();
                })
                .then(function (user) {
                    $scope.patient_email = user.email;
                });
        }


        $scope.update = function () {
            Restangular.one('patients', $stateParams.userId).get()
                .then(function (doctor) {
                    for (var property in patient) {
                        if ($scope.patient.hasOwnProperty(property)) {
                            patient[property] = $scope.patient[property];
                        }
                    }
                    return patient;
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

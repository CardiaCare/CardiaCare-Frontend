(function () {

    angular
        .module('app')
        .controller('DoctorController', ['$scope', 'Restangular', '$translate', '$mdToast', 'AuthService', 'AUTH_EVENTS',
            DoctorController
        ]);

    function DoctorController($scope, Restangular, $translate, $mdToast, AuthService, AUTH_EVENTS) {

        //TODO get not user ID but doctor ID
        $scope.account = AuthService.getUser();

        //FIXME: Change to constant
        //FIXME: Change to permissions
        if ($scope.account.role === "doctor" ||
            $scope.account.role === "chief"
        ) {
            $scope.doctor = $scope.account.person;
        } else {
            Restangular.one('doctors', $scope.account.id).get()
                .then(function (response) {
                    $scope.doctor = response;
                });
        }

        $scope.updateInfo = function () {
            Restangular.one('doctors', $scope.doctor.id).get()
                .then(function (doctor) {
                    for (var property in doctor) {
                        if ($scope.doctor.hasOwnProperty(property)) {
                            doctor[property] = $scope.doctor[property];
                        }
                    }
                    return doctor;
                })
                .then(function (editedDoctor) {
                    return editedDoctor.put();
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


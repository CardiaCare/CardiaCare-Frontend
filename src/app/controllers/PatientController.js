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
            $scope.user.put()
                .then(
                    function (response) {
                        $scope.showSimpleToast($translate.instant('DONE'));
                    },
                    function (errors) {
                        // TODO differrent typer of erroros
                        if (errors.data.snils !== "")
                            $scope.showSimpleToast(errors.data.snils);
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

(function () {

    angular
            .module('app')
            .controller('PasswordRecoveryController', ['$scope', '$state', '$stateParams', 'Restangular', '$translate', 'AuthService', '$mdToast', '$stateParams',
                PasswordRecoveryController
            ]);

    function PasswordRecoveryController($scope, $state, $stateParams, Restangular, $translate, AuthService, $mdToast, $stateParams) {
        $scope.input = {
            password: '',
            code: ''
        };

        $scope.reset = function () {

            var recovery = Restangular.all('recovery');
            return recovery.put($scope.input).then(function (response) {
               //$state.go('home.login');
            }, function (response) {
                $scope.showSimpleToast($translate.instant('ERROR_CODE'));
            });

            $scope.input = {};
        };

        $scope.getRecoveryCode = function () {

            var email;
            if ($stateParams.userEmail) {
                email = $stateParams.userEmail;
            } else {
                $scope.account = AuthService.getUser();
                email = $scope.account.email;
            }

            var recovery = Restangular.all('recovery');
            return recovery.post({email: email}).then(function (response) {
                $scope.showSimpleToast($translate.instant('SENT_CODE'));
            }, function (response) {
                $scope.showSimpleToast($translate.instant('ALREADY_SENT'));
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

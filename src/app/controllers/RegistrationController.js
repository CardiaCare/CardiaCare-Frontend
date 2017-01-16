(function () {

    angular
        .module('app')
        .controller('RegistrationController', ['$scope', '$stateParams','Restangular','$mdToast', 'AuthService',
            RegistrationController
        ]);

    function RegistrationController($scope, $stateParams, Restangular, $mdToast, AuthService) {

        $scope.credentials = {};

        $scope.register = function () {
            AuthService.signup($scope.credentials)
                .then(function () {
                    $state.go('home.profile');
                },function (error){
                    console.log(error);
                    $scope.showSimpleToast(error);
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


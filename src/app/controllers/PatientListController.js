(function () {


    angular
        .module('app')
        .controller('PatientListController', ['$scope', 'Restangular',
            PatientListController
        ]);

    function PatientListController($scope, Restangular) {
        $scope.patients = [];
        $scope.activated = true;

        Restangular.all('patients')
                .getList()
                .then(function (response) {
                    $scope.patients = response;
                    $scope.activated = false;
                });
    }
})();



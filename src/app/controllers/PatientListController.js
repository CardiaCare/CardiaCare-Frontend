(function () {


    angular
        .module('app')
        .controller('PatientListController', ['$scope', 'Restangular',
            PatientListController
        ]);

    function PatientListController($scope, Restangular) {
        $scope.patients = [];

        Restangular.all('patients')
                .getList()
                .then(function (response) {
                    $scope.patients = response;
                });
    }
})();



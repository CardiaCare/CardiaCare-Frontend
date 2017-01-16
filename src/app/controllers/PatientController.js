(function () {

    angular
        .module('app')
        .controller('PatientController', ['$scope', '$stateParams','Restangular','$mdToast',
            PatientController
        ]);

    function PatientController($scope, $stateParams, Restangular, $mdToast) {
        var vm = this;
        
         Restangular.one('patients', $stateParams.userId).get()
                .then(function (response) {
                    $scope.user = response;
                });
                
        Restangular.one('users', $stateParams.userId).get()
                .then(function (response) {
                    $scope.patient_email = response.email;
                });
                
                
        $scope.update = function () {
            $scope.user.put().then(function (response) {
                console.log("Done");
                 $scope.showSimpleToast("Done");
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

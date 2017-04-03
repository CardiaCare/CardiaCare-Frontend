  (function () {

    angular
            .module('app')
            .controller('PatientDoctorsController', ['$scope', 'Restangular', '$translate','$mdDialog','AuthService', 'AUTH_EVENTS',
                PatientDoctorsController
            ]);  
    
  
    function PatientDoctorsController($scope, Restangular, $translate, $mdDialog, AuthService, AUTH_EVENTS) {
        //TODO get not user ID but doctor ID
        $scope.account = AuthService.getUser();
        $scope.doctors =[];
        
        Restangular.one('patients', $scope.account.person.id)
                .all('doctors')
                .getList()
                .then(function (response) {
                    $scope.doctors = response.data;
                });
        
        
    }
  })();

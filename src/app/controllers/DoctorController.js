(function(){

  angular
    .module('app')
    .controller('DoctorController', ['$scope', '$stateParams','Restangular','$mdToast','AuthService', 'AUTH_EVENTS',
      DoctorController
    ]);

  function DoctorController($scope, $stateParams, Restangular, $mdToast, AuthService, AUTH_EVENTS) {
      
      //TODO get not user ID but doctor ID
        $scope.account = AuthService.getUser();

        Restangular.one('doctors', $scope.account.id).get()
                .then(function (response) {
                    $scope.doctor = response;
                });

        $scope.update = function () {
            $scope.doctor.put().then(function (response) {},
                    function (errors) {
                        // TODO differrent typer of erroros
                    });
        }; 
                
//
//    vm.doctor = {
//      email: 'contact@cardiacare.ru',
//      name: 'Petr',
//      patronymic: 'Petrovich' ,
//      surname: 'Petrov' ,
//      organization:'State Hospital'
//    };
  }

})();


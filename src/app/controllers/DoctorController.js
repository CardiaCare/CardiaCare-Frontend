(function(){

  angular
    .module('app')
    .controller('DoctorController', ['$scope', '$stateParams','Restangular','$mdToast',
      DoctorController
    ]);

  function DoctorController($scope, $stateParams, Restangular, $mdToast) {
    
        Restangular.one('doctors', $stateParams.userId).get()
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


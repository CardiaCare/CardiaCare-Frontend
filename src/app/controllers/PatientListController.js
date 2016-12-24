(function(){

  angular
    .module('app')
    .controller('PatientListController', ['$scope', 'HttpService',
      PatientListController
    ]);

    function PatientListController($scope, HttpService) {
        var vm = this;
        
        
        HttpService.getPatientList().then(function(response) {
            vm.patients= response;
        });

        vm.patients2= [
            {
                name: 'Ivan',
                patronymic: 'Ivanovich',
                surname: 'Ivanov'

            },
            {
                name: 'Kirill',
                patronymic: 'Kirillovich',
                surname: 'Kirillov'

            }
            
        ];
    }

})();



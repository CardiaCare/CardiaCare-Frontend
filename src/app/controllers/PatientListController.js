(function(){

  angular
    .module('app')
    .controller('PatientListController', [
      PatientListController
    ]);

    function PatientListController() {
        var vm = this;

        vm.patients = [
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



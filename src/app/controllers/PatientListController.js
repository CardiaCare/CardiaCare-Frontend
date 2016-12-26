(function(){

  angular
    .module('app')
    .controller('PatientListController', ['$http', '$base64',
      PatientListController
    ]);

    function PatientListController($http, $base64) {
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

        $http.get('http://api.cardiacare.ru/patients')
                .then(function (result) {
                     vm.patients = result.data;
                });
    }

})();



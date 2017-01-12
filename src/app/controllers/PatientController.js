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
                
                
        $scope.update = function () {
            $scope.user.put().then(function (response) {},
            function (errors) {
                $scope.showSimpleToast(errors.snils);
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
                

//        vm.user = {
//            email: 'contact@flatlogic.com',
//            name: 'Ivan',
//            patronymic: 'Ivanovich',
//            surname: 'Ivanov',
//            doctorName: 'Petr Petrov',
//            organization: 'State Hospital',
//            snils: '12345',
//            inn: '09876',
//
//            birthday: '11.12.1990',
//            birthplace: 'Petrozavodsk',
//            gender: 'male',
//
//            diagnoses: 'We are young and ambitious full service design and technology company. ' +
//            'Our focus is JavaScript development and User Interface design.',
//            allergy: 'citruse'
//        };
    }

})();

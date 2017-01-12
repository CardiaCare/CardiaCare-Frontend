(function(){

  angular
            .module('app')
            .controller('PasswordRecoveryController', ['$scope', 'HttpService', 'Restangular','$mdToast', '$stateParams',
                PasswordRecoveryController
            ]);

    function PasswordRecoveryController($scope, HttpService, $mdToast, Restangular, $stateParams) {
        var vm = this;

        vm.input = {
            password: '',
            code: ''
        };

        vm.reset = function () {
            
            var recovery = Restangular.all('recovery');
            return recovery.put(vm.input).then(function (response) {
                $scope.showSimpleToast("The code sent to your email");
            }, function (response) {
                scope.showSimpleToast("The code has already been sent");
            });
            
            vm.input = {};
        };

        vm.getRecoveryCode = function () {
            //get email
            
            var email;
            
            Restangular.one('users', $stateParams.userId).get()
                .then(function (response) {
                    email = response.email;
                    console.log("email "+email);
                });
            
            var recovery = Restangular.all('recovery');
            return recovery.post(email).then(function (response) {
                $scope.showSimpleToast("The code sent to your email");
            }, function (response) {
                scope.showSimpleToast("The code has already been sent");
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

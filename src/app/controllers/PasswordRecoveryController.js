(function(){

  angular
            .module('app')
            .controller('PasswordRecoveryController', ['$scope', '$stateParams', 'Restangular','$mdToast', '$stateParams',
                PasswordRecoveryController
            ]);

    function PasswordRecoveryController($scope, $stateParams, $mdToast, Restangular, $stateParams) {
        var vm = this;

        vm.input = {
            password: '',
            code: ''
        };

        vm.reset = function () {
            
            var recovery = Restangular.all('recovery');
            return recovery.put(vm.input).then(function (response) {
                $state.go('home.login');
            }, function (response) {
                scope.showSimpleToast("Error in code");
            });
            
            vm.input = {};
        };

        vm.getRecoveryCode = function () {
            //get email

            var email;
            if ($stateParams.userEmail) {
                email = $stateParams.userEmail;
                console.log(email);
            } else {
                Restangular.one('users', $stateParams.userId).get()
                        .then(function (response) {
                            email = response.email;
                            console.log("email " + email);
                        });
            }
            
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

(function(){

  angular
            .module('app')
            .controller('PasswordRecoveryController', ['$scope', 'HttpService', '$mdToast',
                PasswordRecoveryController
            ]);

    function PasswordRecoveryController($scope, HttpService, $mdToast) {
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

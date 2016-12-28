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
            

            HttpService.putRecovery(vm.input)
                    .then(function () {
                        $scope.showSimpleToast("Password is changed");
                    }, function(result){
                         console.log("test");
                    });

            vm.input = {};
        };

        vm.getRecoveryCode = function () {
            //get email
            HttpService.postRecovery(email)
                    .then(function () {
                        $scope.showSimpleToast("The code sent to your email");
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

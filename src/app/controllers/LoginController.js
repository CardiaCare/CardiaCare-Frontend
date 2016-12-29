(function () {

    angular
        .module('app')
        .controller('LoginController', ['$scope','$mdDialog', '$state', '$rootScope', 'AuthService', 'AUTH_EVENTS',
            LoginController
        ]);

    function LoginController($scope, $mdDialog, $state, $rootScope, AuthService, AUTH_EVENTS) {

        var vm = this;
        vm.credentials = {};
        vm.errors = [];
        vm.login = function () {
            var email = vm.credentials.email;
            var password = vm.credentials.password;

            if (email === '' || password === '') {
                vm.errors.push("Incorrect password or email.");
                $state.go('home.login');
            }
            var credentials = {email: email, password: password};
            AuthService.login(credentials).then(function (response) {
                $state.go('home.doctor-dashboard');
            }, function (errors) {
                //FIXME: Fix error throwing on backend (array instead of object and some standart field-names)
                vm.errors.push("Incorrect password or email.");
                $state.go('home.login');
            });
        };
        
        vm.registration = function () {
            $state.go('home.registration');
        };
                

        vm.recovery = function (ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.prompt()
                    .title('Passwoed recovery')
                    .textContent('Enter email for recovery code sending')
                    .placeholder('Email')
                    .ariaLabel('email')
                    .targetEvent(ev)
                    .ok('Send')
                    .cancel('Cancel');

            $mdDialog.show(confirm).then(function (email) {

                HttpService.postRecovery(email)
                        .then(function () {
                            $scope.showSimpleToast("The code sent to your email");
                        },function(){
                            
                        });
                $state.go('home.recovery');

            }, function () {
            });
        };

    }

})();

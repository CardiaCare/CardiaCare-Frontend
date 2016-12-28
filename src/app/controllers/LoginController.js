(function () {

    angular
        .module('app')
        .controller('LoginController', ['$scope','$mdDialog', '$state', '$rootScope', 'AuthService', 'AUTH_EVENTS',
            LoginController
        ]);

    function LoginController($scope, $mdDialog, $state, $rootScope, AuthService, AUTH_EVENTS) {
        var vm = this;

        vm.credentials = {};

        vm.login = function () {
            var email = vm.credentials.email;
            var password = vm.credentials.password;

            if (email === '' || password === '') {
                alert("Empty credentials");
                return;
            }
            var credentials = {email: email, password: password};
            AuthService.login(credentials).then(function () {
                $state.go('home.doctor-dashboard');
            }, function () {
                $state.go('home.login');
            });
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

                $mdDialog.show(confirm).then(function (result) {
                    
                    
                    
                    
                }, function () {
                    $scope.status = 'You didn\'t name your dog.';
                });
            };

    }

})();

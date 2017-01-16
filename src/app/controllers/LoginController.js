(function () {

    angular
        .module('app')
        .controller('LoginController', ['$scope','$mdDialog', '$translate', '$state', '$rootScope', 'AuthService', 'AUTH_EVENTS','$mdToast',
            LoginController
        ]);

    function LoginController($scope, $mdDialog, $state, $translate, $rootScope, AuthService, AUTH_EVENTS, $mdToast) {

        var vm = this;
        vm.credentials = {};
        vm.errors = [];
        vm.login = function () {
            var email = vm.credentials.email;
            var password = vm.credentials.password;

            if (email === '' || password === '') {
                vm.errors.push("Incorrect password or email.");
                $scope.showSimpleToast("Incorrect password or email.");
                $state.go('home.login');
            }
            var credentials = {email: email, password: password};
            AuthService.login(credentials).then(function (response) {
                $state.go('home.doctor-dashboard');
            }, function (errors) {
                //FIXME: Fix error throwing on backend (array instead of object and some standart field-names)
                vm.errors.push("Incorrect password or email.");
                $scope.showSimpleToast( $translate.instant('INCORRECT_PWD_EMAIL'));
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

            $mdDialog.show(confirm).then(function (userEmail) {
                console.log('home.recovery({userEmail:'+userEmail+'})');
                $state.go('home.recovery({userEmail:'+userEmail+'})');

            }, function () {
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

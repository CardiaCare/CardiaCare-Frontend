(function () {

    angular
            .module('app')
            .controller('InvitesController', ['$mdDialog', '$scope', '$mdToast', 'Restangular',
                InvitesController
            ]);

    function InvitesController($mdDialog, $scope, $mdToast, Restangular) {
        var vm = this;

        vm.invite = {
            role: '',
            email: ''
        }

        vm.role = [
            {name: "patient"},
            {name: "doctor"},
            {name: "volunteer"},
            {name: "chief"}];

//        $scope.invites = [
//            {
//                email: "a@a"
//            },
//            {
//                email: "b@b"
//            }
//        ];

        vm.invitePerson = function () {
            //TODO: check empty
            
            var invites = Restangular.all('invites');
            return invites.post(vm.invite).then(function (response) {
                $scope.showSimpleToast("Done!");
            }, function (response) {
                console.log("Error when invite");
            });
            
            vm.invite = {};
        };
        
        $scope.showSimpleToast = function (text) {
            $mdToast.show(
                    $mdToast.simple()
                    .textContent(text)
                    .position('top right')
                    .hideDelay(3000)
                    );
        };

        vm.showInvites = function (ev) {
            
            $mdDialog.show({
                controller: InviteDialogController,
                templateUrl: 'dialog1.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
            
            function InviteDialogController($scope, $mdDialog) {
                Restangular.all('invites').getList().then(function (response) {
                    $scope.invites = response;
                });
                $scope.hide = function () {
                    $mdDialog.hide();
                };

                $scope.cancel = function () {
                $mdDialog.cancel();
            };

            $scope.answer = function (answer) {
                $mdDialog.hide(answer);
            };
            
            $scope.deleteInvite = function (item) {
                console.log("item " + $scope.invites.indexOf(item));
                $scope.invites.splice($scope.invites.indexOf(item), 1);
            };
        };
        };

        
    }
})();
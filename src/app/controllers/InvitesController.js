(function () {

    angular
            .module('app')
            .controller('InvitesController', ['$mdDialog', '$scope','HttpService', '$mdToast',
                InvitesController
            ]);

    function InvitesController($mdDialog, $scope, HttpService, $mdToast,
            PatientListController) {
        var vm = this;

        vm.invite = {
            role: '',
            email: ''
        }

        vm.role = [
            {
                name: "patient"
            },
            {
                name: "doctor"
            },

            {
                name: "volunteer"
            },
            {
                name: "chief"
            }
        ];

//        vm.invites = [
//            {
//                name: "ivan",
//                email: "a@a"
//            },
//            {
//                name: "petr",
//                email: "b@b"
//            }
//
//        ];

        vm.invitePerson = function () {
            //TODO: check empty
            HttpService.postInvite(vm.invite)
                    .then(function () {
                        $scope.showSimpleToast("Done!");
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
            HttpService.getInvitesList()
                    .then(function (invites) {
                        vm.invites = invites;
                    });
            $mdDialog.show({
                controller: InviteDialogController,
                templateUrl: 'dialog1.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        };

        function InviteDialogController($scope, $mdDialog) {
            $scope.hide = function () {
                $mdDialog.hide();
            };

            $scope.cancel = function () {
                $mdDialog.cancel();
            };

            $scope.answer = function (answer) {
                $mdDialog.hide(answer);
            };
        }
        ;

        function deleteInvite(item) {
            alert("item " + item);
            vm.invites = vm.invites.splice(vm.invites.indexOf(item), 1);
        }
        ;
    }

})();
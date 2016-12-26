(function () {

    angular
            .module('app')
            .controller('InvitesController', ['$mdDialog', '$scope','HttpService',
                InvitesController
            ]);

    function InvitesController($mdDialog, $scope, HttpService,
            PatientListController) {
        var vm = this;

        vm.invite = {
            role: '',
            email: ''
        }

        vm.role = [
            {
                name: "Patient"
            },
            {
                name: "Doctor"
            },

            {
                name: "Volunteer"
            },
            {
                name: "Chief"
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
                        
                    });
        };

        vm.showInvites = function (ev) {
            HttpService.getInvitesList()
                    .then(function (invites) {
                        vm.invites = invites;
                    });
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'dialog1.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        };

        function DialogController($mdDialog) {
            this.hide = function () {
                $mdDialog.hide();
            };

            this.cancel = function () {
                alert("here");
                $mdDialog.cancel();
            };

            this.answer = function (answer) {
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
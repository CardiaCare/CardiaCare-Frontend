(function(){

  angular
    .module('app')
    .controller('InvitesController', [ '$mdDialog', '$scope',
                InvitesController
            ]);

    function InvitesController( $mdDialog, $scope ) {
        var vm = this;
        vm.userState = '';
        vm.role = [
            {
                name: "Doctor"
            },
            {
                name: "Patient"
            }

        ];
        
        vm.invites = [
            {
                name: "ivan",
                email:"a@a"
            },
            {
                name: "petr",
                email:"b@b"
            }

        ];

        vm.showInvites = function(ev) {
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
        };
        
        function deleteInvite(item) {
            alert("item "+item);
             vm.invites=  vm.invites.splice( vm.invites.indexOf(item), 1);
        };
    }

})();
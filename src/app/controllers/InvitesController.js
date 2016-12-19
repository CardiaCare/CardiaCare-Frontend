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
    }

})();